import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Button, Form, Container } from "react-bootstrap";

function AddActivity() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "activities"), {
        name: name,
        location: location,
        activity: activity,
        latitude: latitude,
        longitude: longitude,
        timestamp: new Date(),
      });
      setName("");
      setLocation("");
      setActivity("");
      setLatitude("");
      setLongitude("");
      setError("");
      alert("เพิ่มกิจกรรมสำเร็จ!");
    } catch (err) {
      setError("ไม่สามารถเพิ่มข้อมูลได้");
    }
  };

  return (
    <Container>
      <h2>เพิ่มกิจกรรม</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>ชื่อกิจกรรม</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>สถานที่</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>กิจกรรมที่ทำ</Form.Label>
          <Form.Control
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>ละติจูด</Form.Label>
          <Form.Control
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>ลองจิจูด</Form.Label>
          <Form.Control
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </Form.Group>

        {error && <div className="alert alert-danger">{error}</div>}

        <Button type="submit">เพิ่มกิจกรรม</Button>
      </Form>
    </Container>
  );
}

export default AddActivity;
