import React from 'react';
import '../App.css';

import HeroSectionProvince from '../Components/HeroSection/HeroSectionProvince';
import Footer from '../Components/Footer/Footer';
import GoTop from '../Components/GoTop/GoTop';
import Navbar from '../Components/Navbar/Navbar'
import Help from '../Components/Help/Help';
import MainProvice from '../Components/MainProvice/MainProvice';


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