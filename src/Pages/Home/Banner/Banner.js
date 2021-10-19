import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/Banner/img1.png';
import img2 from '../../../images/Banner/img2.png';
import img3 from '../../../images/Banner/img3.png';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
