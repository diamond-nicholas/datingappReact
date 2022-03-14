import React from 'react';
import Cards from './Cards';
import Filter from './Filter';
import './Landing.scss';
import Navbar from './Navbar';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Filter />
      <hr />
      <Cards />
    </div>
  );
};

export default Landing;
