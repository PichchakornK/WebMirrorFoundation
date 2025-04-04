import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const ActivityCard = ({ name, description, image }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="h-100">
            <Card.Body className="d-flex flex-column">
                {image ? (
                    <Card.Img variant="top" src={image} alt={name} className="img-fluid" />
                ) : (
                    <Card.Img variant="top" src="https://via.placeholder.com/300" alt="No Image" />
                )}                <Card.Title>{name}</Card.Title>
                <Card.Text className={expanded ? "text-full" : "text-truncate"}>
                    {description}
                </Card.Text>
                <div className="mt-auto">
                    <Button variant="primary" onClick={() => setExpanded(!expanded)}>
                        {expanded ? "ย่อข้อความ" : "อ่านรายละเอียดเพิ่มเติม"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ActivityCard;