import { Container, Row } from 'react-bootstrap';
import useFakeDb from '../../Hooks/UseFakeDb/useFakeDb';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const { services } = useFakeDb();

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
