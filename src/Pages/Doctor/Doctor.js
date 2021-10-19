import React from 'react';
import { Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = props => {
  const { name, img, designation } = props.doctor;
  return (
    <>
      <Col xs={12} md={6} lg={4} className="mt-4">
        <div className=" doctor-card">
          <img className="img-fluid" src={img} alt="" />
          <div className="mx-5">
            <h5 className="text-info">{name}</h5>
            <p className="text-warning">{designation}</p>
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Doctor;
