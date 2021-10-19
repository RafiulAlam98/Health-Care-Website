import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Extra.css';

const Extra = () => {
  return (
    <Container className="extra-icon">
      <Row>
        <Col xs={12} md={6} lg={4} className="single-element">
          <h1>
            <i class="fas fa-stethoscope fa-3x text-info"></i>
          </h1>
          <h2 className="text-primary">DIAGNOSE</h2>
          <p>Examination & Diagnosis</p>
        </Col>
        <Col xs={12} md={6} lg={4} className="single-element">
          <h1>
            <i class="fas fa-brain fa-3x text-secondary"></i>
          </h1>
          <h2 className="text-primary">TREATMENT</h2>
          <p>Treatment of the disease</p>
        </Col>
        <Col xs={12} md={6} lg={4} className="single-element">
          <h1>
            <i class="fas fa-wheelchair fa-3x text-warning"></i>
          </h1>
          <h2 className="text-primary">CARE HEALTHY</h2>
          <p>Care and recuperation</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Extra;
