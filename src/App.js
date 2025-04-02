import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'C:/Users/User/OneDrive - kmutnb.ac.th/Documents/WebMirrorFoundation/donation-center/src/pics/logo.jpg';
import Contact from './pages/Contact.js';
import Home from "./pages/Home.js";
import About from "./pages/About.js";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* เปลี่ยนจาก href="/" เป็น Link เพื่อให้ React Router ทำงาน */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" style={{ height: '40px' }} /> {/* โลโก้ */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">หน้าแรก</Nav.Link>
            <Nav.Link as={Link} to="/about">เกี่ยวกับ</Nav.Link>
            <Nav.Link as={Link} to="/contact">ติดต่อเรา</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/* เปลี่ยน path เป็น "/" */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>


      

}


export default App;
