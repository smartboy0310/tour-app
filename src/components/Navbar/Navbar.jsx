import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../Assets/Images/logo.jpg'
import myTrip from '../../Assets/Images/my-trip.svg'


function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


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
                Bosh sahifa
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#country'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shaharlar
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contacts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Biz haqimizda
              </Link>
            </li>
          </ul>
          <div className="my-trip">
            <img className='my-trip__img'  src={myTrip} alt="Bookmarks" width={35} height={35} />
          </div>
          <form >
            <input className='search' type="text" placeholder='Search...' />
         </form>
          
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;