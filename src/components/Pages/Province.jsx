import React from 'react';
import '../../App.css';

import HeroSectionProvince from '../HeroSectionProvince';
import Footer from '../Footer';
import GoTop from '../GoTop';
import Navbar from '../Navbar'
import Help from '../Help';
import MainProvice from '../MainProvice';


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