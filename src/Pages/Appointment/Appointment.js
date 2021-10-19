import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  useEffect(() => {
    const url = `./fakeDb.json/${serviceId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <h2>This is Appointment</h2>
    </div>
  );
};

export default Appointment;
