import React from 'react';
import '../../App.css';
import Main from '../Main';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import GoTop from '../GoTop';
import Navbar from '../Navbar'
import SliderImage from '../slider/SliderImage';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />      
      <Main />
      <SliderImage />
      <Footer />
      <GoTop />
      
    </>
  );
}

export default Home;