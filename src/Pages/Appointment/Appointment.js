import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFakeDb from '../Hooks/UseFakeDb/useFakeDb';

const Appointment = () => {
  const { services } = useFakeDb();
  let { serviceId } = useParams();
  console.log(serviceId);
  console.log(services);

  useEffect(() => {
    const findService = services.find(service => console.log(service.id));
    console.log(findService);
  }, [services]);

  return (
    <div>
      <h2>{serviceId}</h2>
    </div>
  );
};

export default Appointment;
