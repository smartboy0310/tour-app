import React from 'react';
import '../App.css';

import Footer from '../components/Footer/Footer';
import GoTop from '../components/GoTop/GoTop';
import Navbar from '../components/Navbar/Navbar'
import Help from '../components/Help/Help';
import HeroSectionHome from '../components/HeroSection/HeroSectionHome';
import Main from '../components/Main/Main';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSectionHome />  
      <Main/>    
      <Footer />
      <GoTop />
      <Help />
      
    </>
  );
}

export default Home;