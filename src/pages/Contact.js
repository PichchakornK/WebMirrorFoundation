import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = { width: "100%", height: "400px" };
const center = { lat: 13.868733951594397, lng: 100.57929018380483 }; // ตำแหน่งของมูลนิธิกระจกเงา

function Contact() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">ติดต่อเรา</h1>
      <Row>
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title>ที่อยู่</Card.Title>
              <Card.Text>
                เลขที่ 191 ซอยวิภาวดี 62 (แยก 4-7) ถนนวิภาวดีรังสิต<br />
                แขวงตลาดบางเขน เขตหลักสี่ กรุงเทพมหานคร 10210
              </Card.Text>
              <Card.Title>เวลาทำการ</Card.Title>
              <Card.Text>
                วันจันทร์-ศุกร์: 09.30 - 17.00 น.<br />
                วันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์: 10.00 - 16.00 น.
              </Card.Text>
              <Card.Title>ผู้บริจาคสัมพันธ์</Card.Title>
              <Card.Text>
                สายด่วน: 061-909-1840<br />
                อีเมล: donate@mirror.or.th
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title>โซเชียลมีเดีย</Card.Title>
              <Card.Text>
                Facebook: <a href="https://www.facebook.com/sharingmirrorfoundation/?locale=th_TH" target="_blank" rel="noopener noreferrer">ศูนย์แบ่งต่อ มูลนิธิกระจกเงา </a><br />
                YouTube: <a href="https://www.youtube.com/channel/UCXsR1uSNB_0nNpWAWSbtvPQ" target="_blank" rel="noopener noreferrer">ศูนย์แบ่งต่อ มูลนิธิกระจกเงา</a><br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;