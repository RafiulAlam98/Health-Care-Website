import { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Appointment.css';

const Appointment = () => {
  let { serviceId } = useParams();
  console.log(serviceId);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/fakeDb.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setServices(data);
      });
  }, []);

  const findService = services.find(service => service.id == serviceId);
  console.log(findService);

  return (
    <Container fluid>
      <h1 className="text-center text-primary service-details">
        Service Details Here
      </h1>
      <Row>
        <Col>
          <Card className="mx-auto text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={findService?.img} />
            <Card.Body>
              <Card.Title className="text-primary">
                {findService?.name}
              </Card.Title>
              <Card.Text className="text-info">
                {findService?.description}
              </Card.Text>
              <Link to="/home">
                <Button variant="primary">Click Me</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointment;