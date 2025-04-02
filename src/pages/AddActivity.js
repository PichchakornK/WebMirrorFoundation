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
    imgURL: "",
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newActivity = {
        ...activity,
        latitude: parseFloat(activity.latitude),
        longitude: parseFloat(activity.longitude),
      };

      await addDoc(collection(db, "activities"), newActivity);
      alert("เพิ่มกิจกรรมสำเร็จ!");
      setActivity({ name: "", description: "", date: "", location: "", latitude: "", longitude: "", imgURL: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("เกิดข้อผิดพลาดในการเพิ่มข้อมูล");
    }
  };

  return (
    <div className="container">
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
          <Form.Label>ลิงก์รูปภาพ (imgURL)</Form.Label>
          <Form.Control type="text" name="imgURL" value={activity.imgURL} onChange={handleChange} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          บันทึกกิจกรรม
        </Button>
      </Form>
    </div>
  );
};

export default AddActivity;
