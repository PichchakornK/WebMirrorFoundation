import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ActivityCard({ id, name, description, image }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={`/activity/${id}`}>
                    <Button variant="primary">ดูรายละเอียด</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ActivityCard;
