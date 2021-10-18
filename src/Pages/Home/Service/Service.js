import React from 'react';
import { Col } from 'react-bootstrap';

const Service = props => {
  console.log(props.service);
  const { name, img, description } = props.service;
  return (
    <Col xs={12} md={12} lg={12}>
      <div>
        <img src={img} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Service;
