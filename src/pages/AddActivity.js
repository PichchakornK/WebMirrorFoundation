import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";

const AddActivity = () => {
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "activities"), activity);
      alert("เพิ่มกิจกรรมสำเร็จ!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container">
      <h2>เพิ่มกิจกรรม</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>ชื่อกิจกรรม</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>รายละเอียด</Form.Label>
          <Form.Control as="textarea" name="description" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>วันที่</Form.Label>
          <Form.Control type="date" name="date" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>ที่อยู่</Form.Label>
          <Form.Control type="text" name="location" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>ละติจูด (Latitude)</Form.Label>
          <Form.Control type="text" name="latitude" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>ลองจิจูด (Longitude)</Form.Label>
          <Form.Control type="text" name="longitude" onChange={handleChange} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          บันทึกกิจกรรม
        </Button>
      </Form>
    </div>
  );
};

export default AddActivity;
