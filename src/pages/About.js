import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col, Card } from 'react-bootstrap';
import centerImage1 from '../pics/แบ่งต่อ1.jpg'; 
import centerImage2 from '../pics/แบ่งต่อ2.jpg'; 
import centerImage3 from '../pics/แบ่งต่อ3.jpg'; 
import centerImage4 from '../pics/แบ่งต่อ4.jpg'; 
import centerImage5 from '../pics/แบ่งต่อ4.jpg'; 
import centerImage6 from '../pics/แบ่งต่อ6.jpg'; 
import centerImage7 from '../pics/แบ่งต่อ4.jpg'; 
import centerImage8 from '../pics/แบ่งต่อ4.jpg'; 
import centerImage9 from '../pics/แบ่งต่อ9.jpg'; 
import centerImage10 from '../pics/แบ่งต่อ10.jpg'; 
import centerImage11 from '../pics/แบ่งต่อ11.jpg'; 
import centerImage12 from '../pics/แบ่งต่อ12.jpg'; 
import centerImage13 from '../pics/แบ่งต่อ13.jpg'; 
import centerImage14 from '../pics/แบ่งต่อ14.jpg'; 

function About() {
  return (
    <div className="container mt-4">
      <h1>เกี่ยวกับศูนย์แบ่งต่อ</h1>

      <p>
        ศูนย์แบ่งต่อถูกจัดตั้งขึ้นภายใต้แนวคิดที่ว่า ของบริจาคทุกชิ้นนั้นสามารถสร้างประโยชน์ได้มหาศาลหากไปอยู่ในมือของผู้ที่สามารถใช้งานสิ่งนั้นได้อย่างเต็มประสิทธิภาพหรืออยู่ในมือผู้ที่ต้องการสิ่งนั้นจริงๆ และเพื่อให้ของบริจาคทุกชิ้นเกิดประโยชน์สูงสุดแก่ผู้รับ ศูนย์แบ่งต่อจึงขอเป็นตัวกลางในการช่วยส่งต่อของบริจาคเหล่านี้ไปยังมือผู้รับที่ต้องการทั่วประเทศ
      </p>

      <h3>หลักเกณฑ์การแบ่งต่อ</h3>
      <ul>
        <li>เน้นการแบ่งต่อให้เฉพาะองค์กรต่างๆ ถ้าเป็นเคสบุคคลพิจารณาเป็นกรณีๆ ไป</li>
        <li>เน้นประโยชน์แก่ผู้รับของบริจาค เพื่อให้ของบริจาคถูกนำไปใช้ให้เกิดประโยชน์จริง</li>
        <li>การช่วยเหลือหรือการแบ่งต่อให้กับองค์กรต่างๆ จะช่วยอย่างต่อเนื่อง จนกว่าจะพิจารณาแล้วว่าไม่จำเป็นต้องช่วยเหลือเพิ่ม</li>
        <li>หากเป็นองค์กรขนาดใหญ่ที่มีเครือข่ายและช่วยเหลือภาคสังคม เช่น รพ แม่ข่ายประจำจังหวัด, สมาคม, โรงเรียนที่เป็นตัวแทนในเขต และมีความจำเป็นต้องใช้ของบริจาคจำนวนมาก ก็จะพิจารณาช่วยเหลือตามความจำเป็นต่อไป</li>
      </ul>

      <h3>วิธีการทำงาน</h3>
      <p><strong>การทำงานเชิงรุก</strong></p>
      <ul>
        <li>ค้นหาข้อมูลทางอินเตอร์เน็ตโทรประสานติดต่อ รร ขนาดเล็ก, รพ, สถานีอนามัย, หน่วยงานที่เกี่ยวข้องโดยตรง เพื่อให้ทราบว่าเรามีของบริจาคพร้อมช่วยเหลือ</li>
        <li>เข้าพื้นที่โดยตรง พูดคุยกับชาวบ้าน ตรวจสอบและค้นหาองค์กรที่ต้องการการช่วยเหลือ</li>
        <li>จัดทำกิจกรรมช่วยเหลือองค์กรต่างๆ ด้วยของบริจาค เพื่อให้การช่วยเหลือไม่ใช่แค่มอบของแล้วเสร็จสิ้น แต่ทำให้ของบริจาคเกิดประโยชน์สูงสุด</li>
        <li>ประสานงานองค์กรเมื่อมีบริษัทที่จะบริจาคของเพื่อให้เขาดำเนินการไปรับ ในกรณีที่ทางมูลนิธิไม่สะดวกไปรับ</li>
      </ul>

      <p><strong>การทำงานเชิงรับ</strong></p>
      <ul>
        <li>รวบรวมข้อมูลเพื่อพิจารณา และช่วยเหลือแบ่งต่อของบริจาคเมื่อมีผู้ติดต่อมาขอความช่วยเหลือทั้งที่มาจากทางศูนย์ประชาสัมพันธ์, โทรเข้ามาโดยตรง, หรือตามช่องทางต่างๆ</li>
        <li>สำรวจของบริจาคทั้งหมดเพื่อเตรียมการเวลามีผู้มาขอความช่วยเหลือ</li>
      </ul>

      <h3>การออกพื้นที่</h3>
      <ul>
        <li>ตามดูของบริจาคที่องค์กรรับไปเพื่อตรวจสอบว่ามีประโยชน์จริงหรือไม่</li>
        <li>ไปตรวจสอบองค์กรที่ต้องการความช่วยเหลือทั้งพื้นที่ใหม่และมีการขอความช่วยเหลือ เพื่อหาทางส่งของบริจาคและจัดกิจกรรมเพื่อช่วยเหลือ</li>
        <li>ร่วมมือสร้างเครือข่ายและเปิดพื้นที่ใหม่ๆ เพื่อพัฒนาศูนย์แบ่งต่อ</li>
      </ul>

      {/* Grid Layout: แสดงรูปภาพแบบตาราง */}
      <h3>กิจกรรมของศูนย์แบ่งต่อ</h3>
      <Row>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage1} />
            <Card.Body>
              <Card.Title>กิจกรรมกวักน้องมาเรียน</Card.Title>
              <Card.Text>กิจกรรมที่มีความมุ่งหมายที่จะช่วยลดเด็กเสี่ยงหลุดจากระบบ และดึงเด็กที่หลุดจากระบบกลับมาเรียนในระบบการศึกษาเพื่อโอกาสของอนาคตเด็กให้ได้</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage2} />
            <Card.Body>
              <Card.Title>กิจกรรมพ้นวิกฤติ</Card.Title>
              <Card.Text>กิจกรรมที่นำวัสดุต่างๆไปช่วยซ่อมแซมปรับปรุงที่อยู่อาศัยที่อยู่ในภาวะวิกฤติ ที่อาจมีผลต่อคุณภาพชีวิต ไปจนถึงเสี่ยงอันตรายต่อชีวิต โดยวัสดุที่นำไปทำมีทั้งวัสดุเหลือใช้ วัสดุที่ได้รับบริจาคมาต่างๆ</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage3} />
            <Card.Body>
              <Card.Title>กิจกรรมแบ่งต่อเรนเจอร์</Card.Title>
              <Card.Text>กิจกรรมที่จะไปสร้างแรงบันดาลใจให้เด็กๆตามโรงเรียน ซ่อมแซมพื้นที่ในโรงเรียนให้พร้อมใช้งาน และกิจกรรมที่ไปสร้างกำลังใจให้ผู้คนต่างๆ เช่น กิจกรรมรดน้ำดำหัวดิลิเวอร์รี่, กิจกรรมซานต้า is you </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage4} />
            <Card.Body>
              <Card.Title>กิจกรรมกล่องช่วยหมอ</Card.Title>
              <Card.Text>กิจกรรมที่สร้างทีมอาสาสมัครช่วยกันผลิตของจากวัสดุต่างๆมาส่งให้ทีมแพทย์ เช่น ถุงสวมเท้าชุด ppe, ถักปลอกมือกันคนไข้ดึงสายน้ำเกลือ, ถุงใส่สายฟอกไต</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage14} />
            <Card.Body>
              <Card.Title>กิจกรรมต้นปันใจ</Card.Title>
              <Card.Text>กิจกรรมที่ให้อาสาช่วยจัดหากระถางต้นไม้ และต้นไม้เล็กๆเพื่อเพ้นท์และส่งต่อให้กลุ่มผู้ป่วยในแผนกจิตเวช</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage6} />
            <Card.Body>
              <Card.Title>กิจกรรมห้องดนตรีแบ่งต่อ</Card.Title>
              <Card.Text>กิจกรรมที่รวบรวมเครื่องดนตรี อุปกรณ์ดนตรี ไปสร้างห้องเรียนดนตรีให้โรงเรียนที่มีครูดนตรีแต่ไม่มีอุปกรณ์ดนตรีในการใช้สอนเด็ก</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage14} />
            <Card.Body>
              <Card.Title>กิจกรรม recycle run</Card.Title>
              <Card.Text>กิจกรรมจัดวิ่งระดมทุนค่าจัดการ บริหารงานศูนย์แบ่งต่อ และค่าจัดส่งวัสดุอุปกรณ์ต่างๆให้นักเรียนยากจน โดยถ้วยรางวัลและเหรียญรางวัลจะใช้เป็นวัสดุรีไซเคิลทั้งมดเพื่อแสดงให้เห็นการนำของกลับมาใช้ใหม่</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage14} />
            <Card.Body>
              <Card.Title>กิจกรรม mirror chance talent</Card.Title>
              <Card.Text>กิจกรรมจัดประกวดความสามารถเด็กพิการเพื่อสร้างกำลังใจและเปิดโอกาสให้เด็กๆได้มีโอกาสได้แสดงออก</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage9} />
            <Card.Body>
              <Card.Title>กิจกรรมฝากยิ้มกลับบ้าน</Card.Title>
              <Card.Text>กิจกรรมที่นำตุ๊กตาไปแจกให้พนักงานโรงงานเพื่อนำกลับไปฝากลูกหลานได้ มีข้อม้ต้องกลับไปยิ้มให้ครอบครัว 1 ครั้ง เป็นกิจกรรมที่ต้องการให้ตระหนักเรื่องอย่าลืมพูดคุยและยิ้มให้ครอบครัว เพื่อลดอัตราความรุนแรงในครอบครัวในอนาคต</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage10} />
            <Card.Body>
              <Card.Title>กิจกรรมตาต่อตา</Card.Title>
              <Card.Text>กิจกรรมที่ไปแจกแว่นสายตาให้ผู้สูงอายุในชุมชน</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage11} />
            <Card.Body>
              <Card.Title>ธนาคารโอกาส</Card.Title>
              <Card.Text>กิจกรรมที่ร่วมกับทาง กสศ ในการสร้างโอกาสด้านการศึกษาให้เด็กๆ ทั้งการส่งอุปกรณ์ ประสานงานร.ร.ต่างๆให้นักเรียนได้เข้าเรียน</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage12} />
            <Card.Body>
              <Card.Title>กิจกรรมถนนครูเดิน</Card.Title>
              <Card.Text>กิจกรรมที่ผลักดันขับเคลื่อนเชิงนโยบายด้านการศึกษาเรื่องการจัดสรรงบประมาณที่ขาดแคลนใน ร.ร.ขนาดเล็ก ร.ร.พื้นที่สูง และห่างไกล</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={centerImage13} />
            <Card.Body>
              <Card.Title>ส่งของบริจาคให้หน่วยงานและเคสขอความช่วยเหลือทั่วประเทศ</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
