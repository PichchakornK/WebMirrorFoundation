import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";

function ActivityDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const activities = location.state?.activities || [];

    return (
        <div className="container">
            <h2>{activities.length > 0 ? activities[0].name : "กิจกรรม"}</h2>
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>🔙 กลับ</button>
            <Row className="g-4">
                {activities.map((activity, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <Card.Img variant="top" src={activity.image} alt={activity.name} />
                            <Card.Body>
                                <Card.Title>{activity.name}</Card.Title>
                                <Card.Text>{activity.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ActivityDetails;
