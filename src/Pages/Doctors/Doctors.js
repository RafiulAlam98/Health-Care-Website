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
      <h3 className="text-center about-header">MEET OUR DOCTORS</h3>
      <h1 className="text-center">
        <span className="text-info">Professional & </span>Enthusiastic
      </h1>
      <p className="text-center">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the.
      </p>
      <Container>
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
