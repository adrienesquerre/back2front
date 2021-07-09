import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 9
            +60) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                       Back2front &nbsp;<i className="fas fa-bolt"></i>
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to ='/frontend' className='nav-links' onClick={closeMobileMenu}>
                               Front-end
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to ='/fullstack' className='nav-links' onClick={closeMobileMenu}>
                                Fullstack
                           </Link>
                       </li>
                       <li className='nav-item'>
                       </li>
                   </ul>
               </div>
           </nav>
        </>
    )
}

export default Navbar
