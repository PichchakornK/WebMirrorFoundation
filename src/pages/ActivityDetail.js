import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import ActivityCard from "./ActivityCard";
import '../Activities.css';


function ActivityDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const activities = location.state?.activities || [];
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div className="container">
            <h2>{activities.length > 0 ? activities[0].name : "กิจกรรม"}</h2>

            <button className="d-flex justify-content-start mb-3"           
                style={{ 
                    backgroundColor: "#D6E6FF", 
                    color: "#004085",
                    borderRadius: "5px"
                    }} 
                onClick={() => navigate(-1)}>⬅️ย้อนกลับ</button>
            <Row className="g-4">
                {activities.map((activity, index) => (
                    <Col key={index} md={4}>
                        <ActivityCard 
                            name={activity.name} 
                            description={activity.description} 
                            image={activity.image}
                            expanded={expandedIndex === index}
                            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ActivityDetails;