import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Body></Body>
      <Services></Services>
    </div>
  );
};

export default Home;
