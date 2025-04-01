import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const mapContainerStyle = { width: "100%", height: "500px" };
const defaultCenter = { lat: 13.736717, lng: 100.523186 }; // กรุงเทพฯ

function Home() {
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("activities");
    const [mapCenter, setMapCenter] = useState(defaultCenter); // default location map
    // search province function
    const handleSearchChange = (e) => setSearch(e.target.value);
  
    const handleSearchSubmit = () => {
      if (search.trim()) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
          .then(response => response.json())
          .then(data => {
            if (data.status === "OK") {
              const location = data.results[0].geometry.location;
              setMapCenter({ lat: location.lat, lng: location.lng }); // เปลี่ยนตำแหน่งแผนที่ตามการค้นหา
            } else {
              alert("ไม่พบข้อมูลจังหวัดหรือสถานที่ที่ค้นหา");
            }
          })
          .catch(error => console.error('Error:', error));
      }
    };
  
    useEffect(() => {
      fetch('http://localhost:5000/your-api-endpoint') // แทนที่ด้วย URL API ของคุณ
        .then(response => response.json())
        .then(data => setActivities(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    const filteredActivities = activities.filter(act => {
      const nameMatch = act.name.toLowerCase().includes(search.toLowerCase());
      const typeMatch = filter === "all" || act.type === filter;
      return nameMatch && typeMatch;
    });
  
    return (
      <div>
        <h1>กิจกรรมศูนย์แบ่งต่อ</h1>
  
        {/* ฟอร์มค้นหาจังหวัด */}
        <Form className="mb-3" inline onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }}>
          <Form.Control
            type="text"
            placeholder="ค้นหาจังหวัดหรือสถานที่..."
            value={search}
            onChange={handleSearchChange}
          />
          <Button variant="primary" onClick={handleSearchSubmit}>
            ค้นหา
          </Button>
        </Form>
  
        <Form>
          <Form.Group controlId="filterSelect">
            <Form.Label>เลือกประเภท</Form.Label>
            <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="activities">กิจกรรม</option>
              <option value="deliveries">การส่งของ</option>
              <option value="all">ทั้งหมด</option>
            </Form.Control>
          </Form.Group>
        </Form>
  
        {/* แผนที่ Google */}
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={6}>
            {filteredActivities.map((act) => (
              <Marker 
                key={act._id} 
                position={{ lat: act.lat, lng: act.lng }} 
                title={act.name}
                onClick={() => setSelectedActivity(act)}
              />
            ))}
  
            {/* ถ้ามีการเลือกกิจกรรม จะมี InfoWindow แสดงรายละเอียด */}
            {selectedActivity && (
              <InfoWindow
                position={{ lat: selectedActivity.lat, lng: selectedActivity.lng }}
                onCloseClick={() => setSelectedActivity(null)}
              >
                <div>
                  <h3>{selectedActivity.name}</h3>
                  <p>{selectedActivity.type}</p>
                  <p>{selectedActivity.description}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
  
        {/* แสดงรายการกิจกรรม */}
        <div>
          <h2>รายการกิจกรรม</h2>
          {filteredActivities.map((act) => (
            <p key={act._id}>{act.name} ({act.type})</p>
          ))}
        </div>
      </div>
    );
  }

export default Home;  
