import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col, Card } from 'react-bootstrap';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Activities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "activities"));
            setActivities(querySnapshot.docs.map(doc => doc.data()));
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>กิจกรรม</h2>
            <Row>
                {activities.map((activity, index) => (
                    <Col key={index} md={4}>
                        <Card>
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

export default Activities;
