import React from 'react';
import NavbarIcon from '../../img/navbar-logo.png'
import './navbar.css'

const Signup = () => {
    return (
        <div id="navbar-container">
            <img src={NavbarIcon} id="navbar-logo"></img>
            <a id="navbar-contact" href="mailto: abc@example.com">
                    Contact Us
            </a>
        </div>
    );
}

export default Signup;
