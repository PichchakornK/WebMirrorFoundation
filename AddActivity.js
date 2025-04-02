// src/AddActivity.js
import { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Button, Form } from "react-bootstrap";

function AddActivity() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "activities"), {
        name: name,
        description: description,
        location: new firebase.firestore.GeoPoint(parseFloat(lat), parseFloat(lng)),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h2>เพิ่มกิจกรรม</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>ชื่อกิจกรรม</Form.Label>
          <Form.Control
            type="text"
            placeholder="กรุณากรอกชื่อกิจกรรม"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>รายละเอียดกิจกรรม</Form.Label>
          <Form.Control
            type="text"
            placeholder="กรุณากรอกรายละเอียดกิจกรรม"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formLatitude">
          <Form.Label>ละติจูด (Latitude)</Form.Label>
          <Form.Control
            type="text"
            placeholder="กรุณากรอกละติจูด"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formLongitude">
          <Form.Label>ลองจิจูด (Longitude)</Form.Label>
          <Form.Control
            type="text"
            placeholder="กรุณากรอกลองจิจูด"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">เพิ่มกิจกรรม</Button>
      </Form>
    </div>
  );
}

export default AddActivity;
