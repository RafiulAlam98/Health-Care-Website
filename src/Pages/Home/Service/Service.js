import React from 'react';
import './Service.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = props => {
  const { id, name, img, description } = props.service;
  return (
    <Col xs={12} md={12} className="single-card mt-4">
      <div className="card-info">
        <img className="img-fluid" src={img} alt="" />
        <div className="mx-5">
          <h2 className="name-text-style">{name}</h2>
          <p className="text-white">{description}</p>
          <Link to={`/appointment/${id}`}>
            <button className="card-btn">See More</button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Service;