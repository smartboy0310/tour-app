import React from 'react';
import '../App.css';

import HeroSectionProvince from '../components/HeroSectionProvince';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';
import Navbar from '../components/Navbar'
import Help from '../components/Help';
import MainProvice from '../components/MainProvice';


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