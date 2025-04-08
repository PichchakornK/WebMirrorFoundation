import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "../firebase";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";


function AddActivity() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
    imgURL: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().role === "admin") {
        setIsAdmin(true);
        localStorage.setItem("userToken", user.uid);
      } else {
        setError("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
      }
    } catch (error) {
      setError("เข้าสู่ระบบล้มเหลว: " + error.message);
    }
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setIsAdmin(false);
      localStorage.removeItem("userToken");
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "activities"), {
        ...activity,
        latitude: parseFloat(activity.latitude),
        longitude: parseFloat(activity.longitude),
      });
      alert("✅ เพิ่มกิจกรรมสำเร็จ!");
      setActivity({ name: "", description: "", date: "", location: "", latitude: "", longitude: "", imgURL: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("⚠️ เกิดข้อผิดพลาดในการเพิ่มข้อมูล");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "100%", maxWidth: "500px", padding: "20px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
        {!isAdmin ? (
          <div>
            <h2 className="text-center">เข้าสู่ระบบ</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>อีเมล</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">เข้าสู่ระบบ</Button>
            </Form>
          </div>
        ) : (
          <div>
            <h2 className="text-center">เพิ่มกิจกรรม</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>ชื่อกิจกรรม</Form.Label>
                <Form.Control type="text" name="name" value={activity.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>รายละเอียด</Form.Label>
                <Form.Control as="textarea" name="description" value={activity.description} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>วันที่</Form.Label>
                <Form.Control type="date" name="date" value={activity.date} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control type="text" name="location" value={activity.location} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>ละติจูด (Latitude)</Form.Label>
                <Form.Control type="text" name="latitude" value={activity.latitude} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>ลองจิจูด (Longitude)</Form.Label>
                <Form.Control type="text" name="longitude" value={activity.longtitude} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>ลิงก์รูปภาพ</Form.Label>
                <Form.Control type="text" name="imgURL" value={activity.imgURL} onChange={handleChange} required />
              </Form.Group>
              <Button variant="success" size="sm" type="submit" className="w-100 mt-3">บันทึกกิจกรรม</Button>
            </Form>
          </div>
        )}
      </Card>

      {isAdmin && (
        <Button
          variant="danger"
          onClick={handleLogout}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
            padding: "10px 15px",
            fontSize: "14px",
            borderRadius: "5px"
          }}
        >
          ออกจากระบบ
        </Button>
      )}
    </Container>
  );
}

export default AddActivity;