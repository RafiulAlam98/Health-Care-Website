import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css';

const Service = props => {
  console.log(props.service);
  const { name, img, description } = props.service;
  return (
    <Col xs={12} md={12} lg={12} className="single-card">
      <div className="d-flex align-items-center justify-content-between">
        <img src={img} alt="" />
        <div className="mx-2">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Service;
