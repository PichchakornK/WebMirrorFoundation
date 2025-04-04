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
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>🔙 กลับ</button>
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
