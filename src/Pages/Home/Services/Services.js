import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('./fakeDb.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <h3>We Specialized In</h3>
      <Container fluid>
        <Row>
          {services.map(service => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
