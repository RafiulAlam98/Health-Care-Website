import React from 'react';
import './AboutUs.css';

import { Carousel, Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="main-container">
      <h1 className="text-center about-header">ABOUT US</h1>
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <div className="about-section">
              <div>
                <h2 className="text-primary">
                  We Provide Most Proffesional Service Since 1978
                </h2>
                <p className="paragraph-text">
                  since the 1500s, when an un known printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting,
                </p>
                <button className="btn-more">Read More</button>
              </div>
              <img
                className="img-fluid"
                src="http://asianitbd.com/wp/mediplus/wp-content/uploads/2016/07/about-1.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
