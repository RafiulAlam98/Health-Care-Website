import React from 'react';
import './Service.css';
import { Col, Row } from 'react-bootstrap';

const Service = props => {
  console.log(props.service);
  const { name, img, description } = props.service;
  return (
    <Col xs={12} md={12} className="single-card">
      <div className="card-info">
        <img className="img-fluid" src={img} alt="" />
        <div className="mx-5">
          <h2 className="name-text-style">{name}</h2>
          <p className="text-white">{description}</p>
          <button className="card-btn">See More</button>
        </div>
      </div>
    </Col>
  );
};

export default Service;
