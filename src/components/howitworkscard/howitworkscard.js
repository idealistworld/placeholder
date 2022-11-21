import React, { useState } from 'react';
import NavbarIcon from '../../img/navbar-logo.png'
import './howitworkscard.css'

const HowItWorks = (props) => {
    return (
        <div id = "how-it-works-card">
            <h1 id = "how-it-works-card-title">{props.title}</h1>
            <p id = "how-it-works-card-paragraph">{props.paragraph}</p>
            </div>
    );
}

export default HowItWorks;
