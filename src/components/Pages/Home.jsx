import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import GoTop from '../GoTop';
import Navbar from '../Navbar'
import SliderImage from '../slider/SliderImage';
import { SliderData } from '../slider/SliderData';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />      
      <Cards />
      <SliderImage/>
      <Footer />
      <GoTop />
      
    </>
  );
}

export default Home;