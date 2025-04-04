import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import "./Contact.css"; // นำเข้า CSS ใหม่

const mapContainerStyle = { width: "100%", height: "400px", borderRadius: "10px", overflow: "hidden" };
const center = { lat: 13.868733951594397, lng: 100.57929018380483 };

function Contact() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#fff9db"; // ตั้งค่าพื้นหลังสีเหลือง
    return () => {
      document.body.style.backgroundColor = ""; // คืนค่าเดิมเมื่อออกจากหน้า
    };
  }, []);

  return (
    
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            {/* Animation แสดงการ์ดที่อยู่ */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <Card className="p-3 shadow-sm contact-card">
                <Card.Body>
                  <Card.Title>📍 ที่อยู่</Card.Title>
                  <Card.Text>
                    เลขที่ 191 ซอยวิภาวดี 62 (แยก 4-7) ถนนวิภาวดีรังสิต<br />
                    แขวงตลาดบางเขน เขตหลักสี่ กรุงเทพมหานคร 10210
                  </Card.Text>

                  <Card.Title>🕒 เวลาทำการ</Card.Title>
                  <Card.Text>
                    วันจันทร์-ศุกร์: <span className="highlight">09.30 - 17.00 น.</span><br />
                    วันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์: <span className="highlight">10.00 - 16.00 น.</span>
                  </Card.Text>

                  <Card.Title>☎️ ผู้บริจาคสัมพันธ์</Card.Title>
                  <Card.Text>
                    <span className="phone">สายด่วน: 061-909-1840</span><br />
                    อีเมล: <a href="mailto:donate@mirror.or.th" className="email-link">donate@mirror.or.th</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={6}>
            {/* Animation แสดงแผนที่ */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col>
            {/* Animation ของโซเชียลมีเดีย */}
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="p-3 shadow-sm social-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Card.Body>
                  <Card.Title>📢 โซเชียลมีเดีย</Card.Title>
                  <Card.Text>
                    <FaFacebook className="social-icon" /> Facebook:{" "}
                    <a href="https://www.facebook.com/sharingmirrorfoundation/?locale=th_TH" target="_blank" rel="noopener noreferrer">
                      ศูนย์แบ่งต่อ มูลนิธิกระจกเงา
                    </a>
                    <br />
                    <FaYoutube className="social-icon youtube" /> YouTube:{" "}
                    <a href="https://www.youtube.com/channel/UCXsR1uSNB_0nNpWAWSbtvPQ" target="_blank" rel="noopener noreferrer">
                      ศูนย์แบ่งต่อ มูลนิธิกระจกเงา
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
  );
}

export default Contact;
