import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <Container fluid className="footer-container mt-4">
        <Row>
          <Col xs={12} md={4} className="footer-text">
            <h2 className="mt-5">
              <span className="text-white">MEDI</span>
              <span className="text-primary">PLUS</span>
            </h2>
            <h4 className="text-white">Medical and Dental Service</h4>
            <h6>
              <span>
                <i className="fas fa-map-marker-alt text-white"></i>
              </span>
              <span className="text-info"> 60 Grant Ave. Carteret NJ 0708</span>
            </h6>
            <h6>
              <span>
                <i className="fas fa-phone-square-alt text-white"></i>
              </span>
              <span className="text-info"> (880) 1723801729</span>
            </h6>
            <h6>
              <span>
                <i class="fas fa-envelope text-white "></i>
              </span>
              <span className="text-info"> example@gmail.com</span>
            </h6>
            <span className="mx-2">
              <i className="fab fa-facebook text-white rounded fa-2x"></i>
              <i class="fab fa-twitter text-white rounded fa-2x"></i>
              <i class="fab fa-google-plus text-white rounded fa-2x"></i>
              <i class="fab fa-linkedin text-white rounded fa-2x"></i>
            </span>
          </Col>
          <Col xs={12} md={4} className="footer-text">
            <div className="mt-5">
              <h3 className="text-warning">SERVICES</h3>
              <br />
              <h6 className="text-white">Dental</h6>
              <h6 className="text-info">Cadilogy</h6>
              <h6 className="text-white">Neurology</h6>
              <h6 className="text-info">Bond Binding</h6>
              <h6 className="text-white">X-Ray</h6>
              <h6 className="text-info">Pregency</h6>
              <h6 className="text-white">Heart Dieases</h6>
            </div>
          </Col>
          <Col xs={12} md={4} className="footer-text">
            <div className="mt-5">
              <h1 className="text-danger">LATEST NEWS</h1>
              <br />
              <h5 className="text-white">Latest Blog Post With Image</h5>
              <h6 className="text-info">19 Oct 2021</h6>
              <h5 className="text-white">Latest Blog Post With Image</h5>
              <h6 className="text-info">19 Oct 2021</h6>
              <h5 className="text-white">Latest Blog Post With Image</h5>
              <h6 className="text-info">19 Oct 2021</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
