import React from 'react';
import '../App.css';

import Footer from '../components/Footer/Footer';
import GoTop from '../components/GoTop/GoTop';
import Navbar from '../components/Navbar/Navbar'
import Help from '../components/Help/Help';
import Search from '../components/Search/Search';


function Home() {
  return (
    <>
      <Navbar /> 
      <Search />       
      <Footer />
      <GoTop />
      <Help />
      
    </>
  );
}

export default Home;