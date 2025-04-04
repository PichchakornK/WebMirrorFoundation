import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pics/logo.jpg';
import Contact from './pages/Contact.js';
import AddActivity from "./pages/AddActivity.js";
import ActivityMap from "./pages/ActivityMap.js";
import Activities from "./pages/Activities.js";
import ActivityDetail from "./pages/ActivityDetail.js";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
          {/* โลโก้ */}
          <Navbar.Brand as={Link} to="/activity-map">
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* จัดเมนูให้อยู่ตรงกลาง */}
            <Nav className="mx-auto"> {/* ใช้ mx-auto เพื่อจัดให้อยู่กลาง */}
              <Nav.Link as={Link} to="/activity-map" className="mx-3">หน้าแรก</Nav.Link>
              <Nav.Link as={Link} to="/activities" className="mx-3">กิจกรรม</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-3">ติดต่อเรา</Nav.Link>
              <Nav.Link as={Link} to="/add-activity" className="mx-3">เพิ่มกิจกรรม</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="App">
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ActivityMap />} /> {/* เพิ่ม path="/" สำหรับหน้าแรก */}
            <Route path="/activity-map" element={<ActivityMap />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/add-activity" element={<AddActivity />} />
            <Route path="/" element={<Activities />} />
            <Route path="/activity/:name" element={<ActivityDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
