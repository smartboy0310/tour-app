import React from 'react';
import '../../App.css';
import Main from '../Main';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import GoTop from '../GoTop';
import Navbar from '../Navbar'
import SliderImage from '../slider/SliderImage';
import Help from '../Help';


function Sanctuary() {
  return (
    <>
      <Navbar />
      <HeroSection />      
      <Main />
      <SliderImage />
      <Footer />
      <GoTop />
      <Help />
      
    </>
  );
}

export default Sanctuary;