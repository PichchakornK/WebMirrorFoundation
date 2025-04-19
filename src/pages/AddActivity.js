import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "../firebase";
import { Form, Button, Alert, Container, Card, Row, Col } from "react-bootstrap";
import { collection, addDoc, doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";

function AddActivity() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [activity, setActivity] = useState({
    id: "",
    name: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
    imgURL: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activitiesList, setActivitiesList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsAdmin(true);
      fetchActivities();
    }
  }, []);

  const fetchActivities = async () => {
    onSnapshot(collection(db, "activities"), (snapshot) => {
      const activitiesData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setActivitiesList(activitiesData);
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().role === "admin") {
        setIsAdmin(true);
        localStorage.setItem("userToken", user.uid);
        fetchActivities();
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
      setSuccessMessage("");
      setError("");
    }).catch((error) => {
      console.error("Error signing out: ", error);
      setError("เกิดข้อผิดพลาดในการออกจากระบบ");
    });
  };

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setError("");
    try {
      if (isEditing) {
        const activityRef = doc(db, "activities", activity.id);
        await updateDoc(activityRef, {
          ...activity,
          latitude: parseFloat(activity.latitude),
          longitude: parseFloat(activity.longitude),
        });
        setSuccessMessage("✅ แก้ไขกิจกรรมสำเร็จ!");
      } else {
        await addDoc(collection(db, "activities"), {
          ...activity,
          latitude: parseFloat(activity.latitude),
          longitude: parseFloat(activity.longitude),
        });
        setSuccessMessage("✅ เพิ่มกิจกรรมสำเร็จ!");
      }
      setActivity({ id: "", name: "", description: "", date: "", location: "", latitude: "", longitude: "", imgURL: "" });
      setIsEditing(false);
    } catch (error) {
      console.error("Error adding/updating document: ", error);
      setError("⚠️ เกิดข้อผิดพลาดในการเพิ่ม/แก้ไขข้อมูล");
    }
    setTimeout(() => {
      setSuccessMessage("");
      setError("");
    }, 3000);
  };

  const handleEdit = (activityData) => {
    setActivity(activityData);
    setIsEditing(true);
    setSuccessMessage("");
    setError("");
  };

  const handleCancelEdit = () => {
    setActivity({ id: "", name: "", description: "", date: "", location: "", latitude: "", longitude: "", imgURL: "" });
    setIsEditing(false);
    setSuccessMessage("");
    setError("");
  };

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <Card style={{ padding: "30px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)", borderRadius: "12px" }}>
            {!isAdmin ? (
              <div>
                <h2 className="text-center mb-4" style={{ color: "#343a40" }}>เข้าสู่ระบบ</h2>
                {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>อีเมล</Form.Label>
                    <Form.Control type="email" placeholder="ใส่อีเมลของคุณ" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: "bold" }}>รหัสผ่าน</Form.Label>
                    <Form.Control type="password" placeholder="ใส่รหัสผ่านของคุณ" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: "#007bff", borderColor: "#007bff", fontWeight: "bold" }}>
                    เข้าสู่ระบบ
                  </Button>
                </Form>
              </div>
            ) : (
              <div>
                <h2 className="text-center mb-4" style={{ color: "#28a745" }}>{isEditing ? "แก้ไขกิจกรรม" : "เพิ่มกิจกรรม"}</h2>
                {successMessage && <Alert variant="success" className="mb-3">{successMessage}</Alert>}
                {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label style={{ fontWeight: "bold" }}>ชื่อกิจกรรม</Form.Label>
                    <Form.Control type="text" name="name" placeholder="ชื่อกิจกรรม" value={activity.name} onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label style={{ fontWeight: "bold" }}>รายละเอียด</Form.Label>
                    <Form.Control as="textarea" name="description" rows={3} placeholder="รายละเอียดกิจกรรม" value={activity.description} onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label style={{ fontWeight: "bold" }}>วันที่</Form.Label>
                    <Form.Control type="date" name="date" value={activity.date} onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label style={{ fontWeight: "bold" }}>ที่อยู่</Form.Label>
                    <Form.Control type="text" name="location" placeholder="สถานที่จัดกิจกรรม" value={activity.location} onChange={handleChange} required />
                  </Form.Group>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formBasicLatitude">
                        <Form.Label style={{ fontWeight: "bold" }}>ละติจูด (Latitude)</Form.Label>
                        <Form.Control type="text" name="latitude" placeholder="เช่น 13.7563" value={activity.latitude} onChange={handleChange} required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formBasicLongitude">
                        <Form.Label style={{ fontWeight: "bold" }}>ลองจิจูด (Longitude)</Form.Label>
                        <Form.Control type="text" name="longitude" placeholder="เช่น 100.5018" value={activity.longtitude} onChange={handleChange} required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formBasicImgURL">
                    <Form.Label style={{ fontWeight: "bold" }}>ลิงก์รูปภาพ</Form.Label>
                    <Form.Control type="text" name="imgURL" placeholder="URL ของรูปภาพกิจกรรม" value={activity.imgURL} onChange={handleChange} required />
                  </Form.Group>

                  <div className="d-flex justify-content-end">
                    {isEditing && (
                      <Button variant="secondary" onClick={handleCancelEdit} className="me-2" style={{ fontWeight: "bold" }}>
                        ยกเลิก
                      </Button>
                    )}
                    <Button variant={isEditing ? "warning" : "success"} type="submit" style={{ fontWeight: "bold" }}>
                      {isEditing ? "บันทึกการแก้ไข" : "บันทึกกิจกรรม"}
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </Card>
        </Col>

        {isAdmin && (
          <Col md={6}>
            <Card style={{ padding: "30px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)", borderRadius: "12px" }}>
              <h2 className="mb-3" style={{ color: "#007bff" }}>รายการกิจกรรม</h2>
              {activitiesList.length > 0 ? (
                <ul className="list-group">
                  {activitiesList.map((act) => (
                    <li key={act.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <strong style={{ color: "#343a40" }}>{act.name}</strong>
                        <br />
                        <small className="text-muted">{new Date(act.date).toLocaleDateString()}</small>
                      </div>
                      <Button variant="info" size="sm" onClick={() => handleEdit(act)} style={{ fontWeight: "bold" }}>
                        แก้ไข
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">ไม่มีกิจกรรมในขณะนี้</p>
              )}
            </Card>
          </Col>
        )}
      </Row>

      {isAdmin && (
        <div className="fixed-bottom p-3 d-flex justify-content-end">
          <Button
            variant="danger"
            onClick={handleLogout}
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              fontWeight: "bold",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
            }}
          >
            ออกจากระบบ
          </Button>
        </div>
      )}
    </Container>
  );
}

export default AddActivity;