import React from 'react';
import DatingCards from '../Components/DatingCards/DatingCards';
import Header from '../Components/Header/Header';
import SwipeButton from '../Components/SwipeButtons/SwipeButton';

const Main = () => {
  return (
    <div>
      <Header />
      <DatingCards />
      <SwipeButton />
    </div>
  );
};

export default Main;
