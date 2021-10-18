import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServiceDb from '../../UseServiceDb/useServiceDb';
import Service from '../Service/Service';

const Services = () => {
  const [services] = useServiceDb();
  console.log(services);
  return (
    <div className="mt-5">
      <h3>We Specialized In</h3>
      <Container fluid>
        <Row>
          {services.map(service => (
            <Service service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
