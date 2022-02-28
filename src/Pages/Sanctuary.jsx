import React from 'react';
import '../App.css';
import Main from '../components/Main';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';
import Navbar from '../components/Navbar'
import SliderImage from '../components/slider/SliderImage';
import Help from '../components/Help';


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