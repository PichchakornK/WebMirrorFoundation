import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const ActivityCard = ({ name, description }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="h-100">
            <Card.Body className="d-flex flex-column">
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
};

export default ActivityCard;
