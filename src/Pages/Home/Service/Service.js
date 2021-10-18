import React from 'react';
import './Service.css';
import { Col } from 'react-bootstrap';

const Service = props => {
  console.log(props.service);
  const { name, img, description } = props.service;
  return (
    <Col xs={12} md={12} lg={12} className="single-card">
      <div className="d-flex justify-content-between align-items-center">
        <img src={img} alt="" />
        <div className="mx-5">
          <h2 className="text-white">{name}</h2>
          <p className="text-white">{description}</p>
          <button className="card-btn">See More</button>
        </div>
      </div>
    </Col>
  );
};

export default Service;
