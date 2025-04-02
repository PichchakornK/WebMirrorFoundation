import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pics/logo.jpg';
import Contact from './pages/Contact.js';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import AddActivity from "./pages/AddActivity.js";
import ActivityMap from "./pages/ActivitiyMap.js";
import Activities from "./pages/Activities.js"


function App() {
  return (
    <Router>
      {/* Navbar ส่วนแรก */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" style={{ height: '40px' }} /> {/* โลโก้ */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">หน้าแรก</Nav.Link>
            <Nav.Link as={Link} to="/about">เกี่ยวกับ</Nav.Link>
            <Nav.Link as={Link} to="/Activities">กิจกรรม</Nav.Link>
            <Nav.Link as={Link} to="/contact">ติดต่อเรา</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="App">
        {/* คอนเทนต์หลัก */}
        <div className="container mt-4">
          <Routes>
            {/* Routes ส่วนแรก */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Routes สำหรับกิจกรรมและแผนที่ */}
            <Route path="/add-activity" element={<AddActivity />} />
            <Route path="/activity-map" element={<ActivityMap />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
