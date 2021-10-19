import { useEffect, useState } from 'react';

const useFakeDb = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/fakeDb.json')
      .then(res => res.json())
      .then(data => {
        setServices(data);
      });
  }, []);

  return { services, setServices };
};

export default useFakeDb;
