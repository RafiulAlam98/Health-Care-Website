import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFakeDb from '../Hooks/UseFakeDb/useFakeDb';

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
    <div>
      <h2>{findService?.name}</h2>
    </div>
  );
};

export default Appointment;
