import React from 'react';
import Main from '../Components/Main/Main';
import HeroSection from '../Components/HeroSection/HeroSection';
import Footer from '../Components/Footer/Footer';
import GoTop from '../Components/GoTop/GoTop';
import Navbar from '../Components/Navbar/Navbar'
import SliderImage from '../Components/Slider/SliderImage';
import Help from '../Components/Help/Help';


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