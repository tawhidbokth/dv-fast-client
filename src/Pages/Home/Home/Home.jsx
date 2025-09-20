import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks> 
      {/* Our Services component can be added here if needed */} 
      <OurServices></OurServices>
    </div>
  );
};

export default Home;