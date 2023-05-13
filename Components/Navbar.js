import React,{useState} from 'react';
import { Link} from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
    const [Click, setClick] = useState(false);
    const [Button, setButton]= useState(true);

    const handleClick=() => setClick(!Click);
    const closeMobileMenu=() => setClick(false);

    const showButton =() => {
      if(window.innerWidth <= 960){
        setButton(false);
      } else {
        setButton(true);
      }
    }
    window.addEventListener('resize',showButton);
  return (
  <>
    <nav className="navbar">
        <div className='navbar-container'>
          <Link>
          GODWIL MONDAY BINFA
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          <i className={Click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={Click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign sUp
              </Link>
            </li>
          </ul>
          {Button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
    </nav>


  </>

  )
}

export default Navbar
