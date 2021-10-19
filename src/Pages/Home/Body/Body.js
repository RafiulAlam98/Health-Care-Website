import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Body.css';

const Body = () => {
  return (
    <Container fluid className="mb-5">
      <Row>
        <Col
          xs={12}
          md={4}
          className="col-1-style d-flex flex-column justify-content-center align-items-center p-5"
        >
          <span>
            <i className="far fa-clock text-warning rounded fa-3x"></i>
          </span>
          <br />
          <h4 className="text-white">OPEN HOURS</h4>
          <div className="d-flex flex-column">
            <h6>
              <span className="text-white">Sunday-Thursday: </span>
              <span className="text-white">9am to 10pm</span>
            </h6>
            <h6>
              <span className="text-white">Saturday: </span>
              <span className="text-white">9am to 5pm</span>
            </h6>
            <h6>
              <span className="text-white">Friday: </span>
              <span className="text-white">Closed</span>
            </h6>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="col-2-style d-flex flex-column justify-content-center align-items-center"
        >
          <i className="far fa-calendar-check text-warning rounded fa-3x"></i>
          <br />
          <h4 className="text-white">APPOINTMENT</h4>
          <p className="text-white">
            Appointment are available, call us today or book a appointment.
          </p>
          <button className="appointment-btn">Book Now</button>
        </Col>
        <Col
          xs={12}
          md={4}
          className="col-3-style d-flex flex-column justify-content-center align-items-center"
        >
          <span>
            <i class="fas fa-tags text-warning rounded fa-3x"></i>
          </span>
          <br />
          <h4 className="text-white">ONLINE BILL SYSTEM</h4>
          <p className="text-white">
            There are many variations of billing system here you go !
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
