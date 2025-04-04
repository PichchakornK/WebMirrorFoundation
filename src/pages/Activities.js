import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, ListGroup } from 'react-bootstrap';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Activities() {
    // const [activities, setActivities] = useState([]);
    const [groupedActivities, setGroupedActivities] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "activities"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            // จัดกลุ่มกิจกรรมตามประเภท
            const groupedByCategory = data.reduce((acc, activity) => {
                const category = activity.category || "ประเภทกิจกรรม";  // Fallback if category is missing
                if (!acc[category]) {
                    acc[category] = {};
                }
                if (!acc[category][activity.name]) {
                    acc[category][activity.name] = [];
                }
                acc[category][activity.name].push(activity);
                return acc;
            }, {});
            
            setGroupedActivities(groupedByCategory);
        };
        fetchData();
    }, []);

    // ฟังก์ชันเมื่อคลิกชื่อกิจกรรม → นำไปหน้าแสดงรายละเอียด
    const handleActivityClick = (name, activities) => {
        navigate(`/activity/${name}`, { state: { activities } });
    };

    return (
        <div className="container">
            <h2>กิจกรรมที่เราเคยทำ</h2>

            {/* แสดงกิจกรรมแบบจัดกลุ่มตามหมวดหมู่ */}
            <Accordion defaultActiveKey="0">
                {Object.keys(groupedActivities).map((category, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header>{category}</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                {Object.keys(groupedActivities[category]).map((name) => (
                                    <ListGroup.Item 
                                        key={name} 
                                        action 
                                        onClick={() => handleActivityClick(name, groupedActivities[category][name])}
                                    >
                                        {name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default Activities;