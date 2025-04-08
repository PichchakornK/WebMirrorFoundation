import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { db } from "../firebase"; // Firebase import
import { collection, getDocs } from "firebase/firestore";
import background from "../pics/background.jpg";
import { Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion'; // นำเข้า Framer Motion สำหรับการเคลื่อนไหว

import centerImage1 from '../pics/แบ่งต่อ1.jpg'; 
import centerImage2 from '../pics/แบ่งต่อ2.jpg'; 
import centerImage3 from '../pics/แบ่งต่อ3.jpg'; 
import centerImage4 from '../pics/แบ่งต่อ4.jpg'; 
import centerImage5 from '../pics/แบ่งต่อ14.jpg'; 
import centerImage6 from '../pics/แบ่งต่อ6.jpg'; 
import centerImage7 from '../pics/แบ่งต่อ14.jpg'; 
import centerImage8 from '../pics/แบ่งต่อ14.jpg'; 
import centerImage9 from '../pics/แบ่งต่อ9.jpg'; 
import centerImage10 from '../pics/แบ่งต่อ10.jpg'; 
import centerImage11 from '../pics/แบ่งต่อ11.jpg'; 
import centerImage12 from '../pics/แบ่งต่อ12.jpg'; 
import centerImage13 from '../pics/แบ่งต่อ13.jpg'; 


const mapContainerStyle = { width: "90%", height: "800px" };
const defaultCenter = { lat: 13.736717, lng: 100.523186 }; // กรุงเทพฯ

function ActivityMap() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [zoom, setZoom] = useState(6); // Added zoom state

  useEffect(() => {
    const fetchActivities = async () => {
      const querySnapshot = await getDocs(collection(db, "activities"));
      const activitiesData = querySnapshot.docs.map(doc => doc.data());
      setActivities(activitiesData);
    };

    fetchActivities();
  }, []);

  const parseDate = (date) => {
    if (date && date.seconds) {
      return new Date(date.seconds * 1000).toLocaleDateString();
    }
    const parsedDate = new Date(date);
    return isNaN(parsedDate) ? "ไม่ทราบวันที่" : parsedDate.toLocaleDateString();
  };

  const handleMapLoad = (map) => {
    if (window.google) {
      // You can access `google` here safely
      map.addListener("zoom_changed", () => {
        setZoom(map.getZoom());
      });
    }
  };

  return ( 
    <div className="text-center" style={{width:"100vw", padding: 0, margin: 0}}>
      <div className="justify-content-center">
        <motion.img 
          src={background} 
          alt="background" 
          class="full-screen-image"
          style={{ width: "100%", height: "auto", marginTop: "-80px"}}
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
        />
      </div>

      <h1 className="text-center my-5">กิจกรรมทั้งหมดบนแผนที่</h1>
      <div className="d-flex justify-content-center my-5">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      
        <GoogleMap
          mapContainerStyle={mapContainerStyle} 
          center={defaultCenter} 
          zoom={zoom} // Use the zoom state here
          onLoad={handleMapLoad} // Ensures Google Maps is loaded before accessing it
        >
          {activities.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 1 }} // Animation effect
            >
              <Marker 
                position={{ lat: parseFloat(act.latitude), lng: parseFloat(act.longtitude) }} 
                title={act.name}
                onClick={() => setSelectedActivity(act)}
              />
            </motion.div>
          ))}

          {selectedActivity && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedActivity.latitude),
                lng: parseFloat(selectedActivity.longtitude),
              }}
              onCloseClick={() => setSelectedActivity(null)}
            >
              <div>
                <h3>{selectedActivity.name}</h3>
                <p>{selectedActivity.description}</p>
                <p><strong>วันที่:</strong> {parseDate(selectedActivity.date)}</p>
                <p><strong>ที่อยู่:</strong> {selectedActivity.location}</p>

                {selectedActivity.imgURL && (
                  <img 
                    src={selectedActivity.imgURL} 
                    alt={selectedActivity.name} 
                    style={{ width: "150px", height: "100px", objectFit: "cover", borderRadius: "8px" }} 
                  />
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
      </div>
        
      <h2 className="text-center my-5">กิจกรรมของศูนย์แบ่งต่อ</h2>
        <div className="container mt-4">   
          <Row>
            <Col md={4} className="mb-4 ">
              <motion.div 
                whileHover={{ scale: 1.05 }} // ทำให้การ์ดขยายขนาดเมื่อ hover
                whileTap={{ scale: 0.95 }} // ลดขนาดเมื่อคลิก
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage1} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}/>
                  <Card.Body>
                    <Card.Title>
                    กิจกรรมกวักน้องมาเรียน
                    </Card.Title>
                    <Card.Text>
                    กิจกรรมที่มีความมุ่งหมายที่จะช่วยลดเด็กเสี่ยงหลุดจากระบบ และดึงเด็กที่หลุดจากระบบกลับมาเรียนในระบบการศึกษาเพื่อโอกาสของอนาคตเด็กให้ได้
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
    
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage2} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมพ้นวิกฤติ
                    </Card.Title>
                    <Card.Text>
                    กิจกรรมที่นำวัสดุต่างๆไปช่วยซ่อมแซมปรับปรุงที่อยู่อาศัยที่อยู่ในภาวะวิกฤติ ที่อาจมีผลต่อคุณภาพชีวิต ไปจนถึงเสี่ยงอันตรายต่อชีวิต โดยวัสดุที่นำไปทำมีทั้งวัสดุเหลือใช้ วัสดุที่ได้รับบริจาคมาต่างๆ
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
    
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage3} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมแบ่งต่อเรนเจอร์
                    </Card.Title>
                    <Card.Text>
                    กิจกรรมที่จะไปสร้างแรงบันดาลใจให้เด็กๆตามโรงเรียน ซ่อมแซมพื้นที่ในโรงเรียนให้พร้อมใช้งาน และกิจกรรมที่ไปสร้างกำลังใจให้ผู้คนต่างๆ เช่น กิจกรรมรดน้ำดำหัวดิลิเวอร์รี่, กิจกรรมซานต้า is you
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage4} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมกล่องช่วยหมอ
                    </Card.Title>
                    <Card.Text>
                    กิจกรรมที่สร้างทีมอาสาสมัครช่วยกันผลิตของจากวัสดุต่างๆมาส่งให้ทีมแพทย์ เช่น ถุงสวมเท้าชุด ppe, ถักปลอกมือกันคนไข้ดึงสายน้ำเกลือ, ถุงใส่สายฟอกไต
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage5} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมต้นปันใจ
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมที่ให้อาสาช่วยจัดหากระถางต้นไม้ และต้นไม้เล็กๆเพื่อเพ้นท์และส่งต่อให้กลุ่มผู้ป่วยในแผนกจิตเวช
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage6} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมห้องดนตรีแบ่งต่อ
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมที่รวบรวมเครื่องดนตรี อุปกรณ์ดนตรี ไปสร้างห้องเรียนดนตรีให้โรงเรียนที่มีครูดนตรีแต่ไม่มีอุปกรณ์ดนตรีในการใช้สอนเด็ก
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage7} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรม recycle run
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมจัดวิ่งระดมทุนค่าจัดการ บริหารงานศูนย์แบ่งต่อ และค่าจัดส่งวัสดุอุปกรณ์ต่างๆให้นักเรียนยากจน โดยถ้วยรางวัลและเหรียญรางวัลจะใช้เป็นวัสดุรีไซเคิลทั้งมดเพื่อแสดงให้เห็นการนำของกลับมาใช้ใหม่
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage8} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรม mirror chance talent
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมจัดประกวดความสามารถเด็กพิการเพื่อสร้างกำลังใจและเปิดโอกาสให้เด็กๆได้มีโอกาสได้แสดงออก
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage9} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมฝากยิ้มกลับบ้าน
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมที่นำตุ๊กตาไปแจกให้พนักงานโรงงานเพื่อนำกลับไปฝากลูกหลานได้ มีข้อม้ต้องกลับไปยิ้มให้ครอบครัว 1 ครั้ง เป็นกิจกรรมที่ต้องการให้ตระหนักเรื่องอย่าลืมพูดคุยและยิ้มให้ครอบครัว เพื่อลดอัตราความรุนแรงในครอบครัวในอนาคต
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage10} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมตาต่อตา
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมที่ไปแจกแว่นสายตาให้ผู้สูงอายุในชุมชน
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage11} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      ธนาคารโอกาส
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมที่ร่วมกับทาง กสศ ในการสร้างโอกาสด้านการศึกษาให้เด็กๆ ทั้งการส่งอุปกรณ์ ประสานงานร.ร.ต่างๆให้นักเรียนได้เข้าเรียน  
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage12} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      กิจกรรมถนนครูเดิน
                    </Card.Title>
                    <Card.Text>
                      กิจกรรมที่ผลักดันขับเคลื่อนเชิงนโยบายด้านการศึกษาเรื่องการจัดสรรงบประมาณที่ขาดแคลนใน ร.ร.ขนาดเล็ก ร.ร.พื้นที่สูง และห่างไกล
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={centerImage13} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                  <Card.Body>
                    <Card.Title>
                      ส่งของบริจาคให้หน่วยงานและเคสขอความช่วยเหลือทั่วประเทศ

                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
    
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >

          </motion.div>
        </div>
        </div>
        
  );
}

export default ActivityMap;