import React from 'react';
import Main from '../components/Main/Main';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';
import GoTop from '../components/GoTop/GoTop';
import Navbar from '../components/Navbar/Navbar'
import SliderImage from '../components/slider/SliderImage';
import Help from '../components/Help/Help';


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