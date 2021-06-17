import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImBlog } from 'react-icons/im'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
   const [click, setClick] =useState(false);   
   const [button, setButton] = useState(true)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setClick(false)

   const showButton = () => {
       if(window.innerWidth <= 960) {
           setButton(false)
       } else {
           setButton(true)
       }
   }

   useEffect(() => {
    showButton();
   }, []);

   window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
           <div className="navbar">
               <div className="navbar-container container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <ImBlog className='navbar-icon' />
                    Blogging India
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}  
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>  
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>  
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>  
                    </li>
                    <li className="nav-item">
                        <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                            Help
                        </Link>  
                    </li>
                    <li className='logbut' >
                        {button ? (
                            <Link to='/creat'>
                                <Button className='logbut' >LOGIN</Button>
                            </Link>
                        ): (
                            <Link to='/creat'  onClick={closeMobileMenu}>
                                <Button className='logbut'>
                                    LOGIN
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
               </div>
            </div> 
            </IconContext.Provider> 
        </>
    )
}

export default Navbar
