import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from "./Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
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
                <Link to="/" className="vested-logo" onClick={closeMobileMenu}>
                    <img width="60" height="60" src="https://vested.co.in/wp-content/uploads/2020/09/Vested_logo-2.svg" class="header_logo header-logo" alt="Vested Finance"></img>
                     {/*<i className="fab fa-typo3" />*/}
                </Link>
                <br/>
                <br/>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                        Pricing
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        AboutUS
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        Blog
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        Podcast
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        Investments
                    </Link>
                    </li>
                   
                </ul>
                {button && <Button buttonStyle='btn--outline'>Start Investing</Button>}
                </div>
        </nav>
        </>
    )
}

export default Navbar;
