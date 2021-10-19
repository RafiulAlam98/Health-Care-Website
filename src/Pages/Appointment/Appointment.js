import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();
  console.log(serviceId);

  useEffect(() => {
    fetch('./fakeDb.json')
      .then(res => res.json())
      .then(data => {
        setServices(data);
      });
  }, []);

  return <div>{services.filter(service => console.log(service.id))}</div>;
};

export default Appointment;
