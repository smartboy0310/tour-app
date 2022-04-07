import React from 'react';
import Footer from '../components/Footer/Footer';
import GoTop from '../components/GoTop/GoTop';
import Navbar from '../components/Navbar/Navbar'
import Essential from '../components/Essential/Essential'
import Help from '../components/Help/Help';


function Essentail() {
  return (
    <>
      <Navbar />
      <Essential />      
      <Footer />
      <GoTop />
      <Help />
    </>
  )
}

export default Essentail
