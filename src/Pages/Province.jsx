import React from 'react';
import '../App.css';

import HeroSectionProvince from '../components/HeroSection/HeroSectionProvince';
import Footer from '../components/Footer/Footer';
import GoTop from '../components/GoTop/GoTop';
import Navbar from '../components/Navbar/Navbar'
import Help from '../components/Help/Help';
import MainProvice from '../components/MainProvice/MainProvice';


function Province() {
  return (
    <>
      <Navbar />
      <HeroSectionProvince />  
      <MainProvice />    
      <Footer />
      <GoTop />
      <Help />
      
    </>
  );
}

export default Province;