import React, { useState } from 'react';
import Navbar from '../navbar/navbar'
import './inputsection.css'
import GlowingOrb from '../../img/glow.png'
import {app, database} from '../../firebase'
import { addDoc, collection, Timestamp} from 'firebase/firestore';


const InputSection = () => {
    const [data, setData] = useState({});
    const collectionRef = collection(database, "emails");
  
    const handleInput = (event) => {
      let newInupt = { email: event.target.value }
      setData({ ...data, ...newInupt });
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addDoc(collectionRef, { emails: data.email}).then(() => {document.getElementById("email-input").value = ""}).then(() => { document.getElementById("email-input").placeholder = "Your email has been added." });
    }

    return (
        <div id="input-section-outer-container">
            <div id="input-section-container">
                <div id = "input-section-text">
                <h1 id="input-section-title">We help you increase your outreach.</h1>
                <p id="input-section-paragraph">You should sign up for our platform.  It’s super cool
                    if you’re running a business in 2022.  Do it.</p>
                </div>
                <div id = "submit-button-container">
                    <input onChange={(event) => handleInput(event)} type = "text" id = "email-input" placeholder="Your company email">
                    </input>
                    <button onClick={(event) => handleSubmit(event)} id = "submit-button">Sign Up</button>
                </div>
                <br></br>
                <img src={GlowingOrb} id="glowing-orb"></img>
            </div>
        </div>
    );
}

export default InputSection;
