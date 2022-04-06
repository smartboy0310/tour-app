import React from 'react';
import Footer from '../components/Footer/Footer';
import GoTop from '../components/GoTop/GoTop';
import Navbar from '../components/Navbar/Navbar'
import Countrys  from '../components/Country/Country';
import Help from '../components/Help/Help';


function Country() {
  return (
    <div>
       <>
      <Navbar />
      <Countrys />      
      <Footer />
      <GoTop />
      <Help />
      
    </>
    </div>
  )
}

export default Country
