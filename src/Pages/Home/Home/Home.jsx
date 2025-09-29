import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import ClientLogoSlider from '../ClientLogoSlider/ClientLogoSlider';
import ServiceHighlights from '../ServiceHighlights/ServiceHighlights';
import BecomeMarchent from '../BecomeMarchent/BecomeMarchent';
import ReviewSection from '../reviews/reviews';
import Faq from '../FAQ/Faq';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks> 
      {/* Our Services component can be added here if needed */} 
      <OurServices></OurServices>
      {/* Additional sections like ClientLogoSlider can be added here */}
      <ClientLogoSlider></ClientLogoSlider>
      <ServiceHighlights></ServiceHighlights>
      <BecomeMarchent></BecomeMarchent>
      <ReviewSection></ReviewSection>
      <Faq></Faq>
    </div>
  );
};

export default Home;