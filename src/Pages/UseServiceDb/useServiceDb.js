import { useEffect, useState } from 'react';

const useServiceDb = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('./homeServiceDb.json')
      .then(res => res.json())
      .then(data => {
        setServices(data);
      });
  }, []);
  return [services, setServices];
};

export default useServiceDb;
