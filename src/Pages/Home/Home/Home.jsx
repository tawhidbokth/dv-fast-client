import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import ClientLogoSlider from '../ClientLogoSlider/ClientLogoSlider';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks> 
      {/* Our Services component can be added here if needed */} 
      <OurServices></OurServices>
      {/* Additional sections like ClientLogoSlider can be added here */}
      <ClientLogoSlider></ClientLogoSlider>
    </div>
  );
};

export default Home;