import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from 'framer-motion';

const ActivityCard = ({ name, description, image, expanded, onToggle }) => {
    return (
        <motion.div 
                whileHover={{ scale: 1.05 }} // ทำให้การ์ดขยายขนาดเมื่อ hover
                whileTap={{ scale: 0.95 }} // ลดขนาดเมื่อคลิก
              >
        <Card className="h-100">
            {image ? (
                <Card.Img variant="top" src={image} alt={name} className="img-fluid" />
            ) : (
                <Card.Img variant="top" src="https://via.placeholder.com/300" alt="No Image" />
            )}
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text className={expanded ? "text-full" : "text-truncate"}>
                    {description}
                </Card.Text>
                <div className="mt-auto">
                    <Button variant="primary" onClick={onToggle}>
                        {expanded ? "ย่อข้อความ" : "อ่านรายละเอียดเพิ่มเติม"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </motion.div>
    );
};

export default ActivityCard;
