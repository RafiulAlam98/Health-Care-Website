import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Extra from '../Extra/Extra';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Body></Body>
      <Extra></Extra>
      <Services></Services>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
