import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
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
      <h3 className="service-header-text">WE ARE SPECIALIZED IN</h3>
      <Container fluid className="mt-4">
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
