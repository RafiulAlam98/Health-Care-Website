import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Doctor.css';

const Doctor = props => {
  const { name, img, designation } = props.doctor;
  return (
    <>
      <Col xs={12} md={6} lg={4} className="mt-4">
        <Card className="text-center">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{designation}</Card.Text>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Doctor;
