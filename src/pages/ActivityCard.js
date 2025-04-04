import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ActivityCard({ id, name, description, image }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className={expanded ? "" : "text-truncate"}>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "ย่อข้อความ" : "อ่านรายละเอียดเพิ่มเติม"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ActivityCard;
