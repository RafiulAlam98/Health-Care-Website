import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="mt-4 mb-4 p-5 tesimonial-container">
      <h4 className="text-center">Testimonials</h4>
      <h1 className="text-center">
        <span className="text-warning">Trusted </span>From Our Clients
      </h1>
      <p className="text-center">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the.
      </p>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <Card style={{ width: '18rem' }} className="text-center bg-info">
              <Card.Body>
                <Card.Title className="text-light">Abu Salah</Card.Title>
                <Card.Text>
                  The services that I receive is excellent. Dr. John Doe and the
                  staff are friendly and ensure that I am properly informed
                  about my health and care. I would have no qualms in
                  recommending them to friendly and friends.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {' '}
            <Card
              style={{ width: '18rem' }}
              className="text-center mt-2 mb-2 bg-info"
            >
              <Card.Body>
                <Card.Title className="text-light">Abir Ahsan</Card.Title>
                <Card.Text>
                  Great medical office, wonderful and warm experience from start
                  to finish. Appreciate Dr. taking time to go over the diagnosis
                  clearly and treatment options. Was referred doctor and can see
                  why. Highly recommended.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {' '}
            <Card style={{ width: '18rem' }} className="text-center bg-info">
              <Card.Body>
                <Card.Title className="text-light">Mrs.Happy Parvin</Card.Title>

                <Card.Text>
                  This practice is terrific. Dr.Mahibur Rahman combines
                  expertise and a willingness to listen and discuss. She’s also
                  an excellent surgeon. Also, the staff is very friendly and
                  professional.Highly recommended for appointing this.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
