import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { Form, Button, Alert } from "react-bootstrap";
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
      } else {
        setError("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
      }
    } catch (error) {
      setError("เข้าสู่ระบบล้มเหลว: " + error.message);
    }
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
    <div className="container">
      {!isAdmin ? (
        <div>
          <h2>เข้าสู่ระบบ</h2>
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
            <Button variant="primary" type="submit">เข้าสู่ระบบ</Button>
          </Form>
        </div>
      ) : (
        <div>
          <h2>เพิ่มกิจกรรม</h2>
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
              <Form.Control type="text" name="longitude" value={activity.longitude} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>ลิงก์รูปภาพ</Form.Label>
              <Form.Control type="text" name="imgURL" value={activity.imgURL} onChange={handleChange} required />
            </Form.Group>
            <Button variant="success" type="submit">บันทึกกิจกรรม</Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default AddActivity;
