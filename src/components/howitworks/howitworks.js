import React, { useState } from 'react';
import HowItWorksCard from '../howitworkscard/howitworkscard'
import './howitworks.css'

const HowItWorks = () => {
    return (
        <div id="how-it-works-container">
            <div id = "how-it-works-content-container">
                <div id = "how-it-works-card-container">
                    <div id = "how-it-works-card-content">
                    <HowItWorksCard title = "1. This is the first step of the card" paragraph = "this is explaining how the step actually works in practice.  this is something that explains a rather complex process in a simple manner.  low words, big impact."></HowItWorksCard>
                    <HowItWorksCard title = "2. This is the first step of the card" paragraph = "this is explaining how the step actually works in practice.  this is something that explains a rather complex process in a simple manner.  low words, big impact."></HowItWorksCard>
                    <HowItWorksCard title = "3. This is the first step of the card" paragraph = "this is explaining how the step actually works in practice.  this is something that explains a rather complex process in a simple manner.  low words, big impact."></HowItWorksCard>
                    <HowItWorksCard title = "4. This is the first step of the card" paragraph = "this is explaining how the step actually works in practice.  this is something that explains a rather complex process in a simple manner.  low words, big impact."></HowItWorksCard>
                    </div>             
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
