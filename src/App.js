import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import { Navbar, Nav,  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pics/logo.png';
import Contact from './pages/Contact.js';
import AddActivity from "./pages/AddActivity.js";
import ActivityMap from "./pages/ActivityMap.js";
import Activities from "./pages/Activities.js";
import ActivityDetail from "./pages/ActivityDetail.js";
import './app2.css'
// import "./home.css"


function App() {
  return (
    <div>
      <Navbar variant="dark" className="py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', fontSize: '1.2rem' }} fixed="top">
        <div className="w-100 d-flex align-items-center justify-content-between px-4">
          <Navbar.Brand as={Link} to="/activity-map">
            <img src={logo} alt="Logo" style={{ height: '50px', marginLeft: '50px',  }} />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mx-auto"> 
              <NavLink to="/activity-map" className="nav-link-custom mx-3" activeClassName="active">หน้าแรก</NavLink>
              <NavLink to="/activities" className="nav-link-custom mx-3" activeClassName="active">กิจกรรม</NavLink>
              <NavLink to="/contact" className="nav-link-custom mx-3" activeClassName="active">ติดต่อเรา</NavLink>
              <NavLink to="/add-activity" className="nav-link-custom mx-3" activeClassName="active">เพิ่มกิจกรรม</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="App" style={{ marginTop: '100px' }}>
        <div className="mt-4 text-center justify-content-center">
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
