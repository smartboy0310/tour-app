import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../Assets/Images/logo.jpg'

function Navbar() {
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
 
  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  const navBarBack = () => {
    if(window.scrollY >=100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', navBarBack)

  return (
    <>
      <nav className={navbar? 'navbar active' : 'navbar'}>
        
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logoImg} alt="logo" className="logo-img" width={50} height={50} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;