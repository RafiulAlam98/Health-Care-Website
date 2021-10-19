import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('./doctorDb.json')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center about-header">MEET OUR DOCTORS</h1>
      <Container fluid>
        <Row>
          {doctors.map(doctor => (
            <Doctor doctor={doctor} key={doctor.id}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
