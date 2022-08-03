import React from "react";
import '../styles/landing.css';

function Landing(){
    return(
        <div className="landing-section">
        <div className="tagline-box">
        <h1 className="tagline-title">Helps you to securely connect to the world over internet</h1>
        <p className="tagline-para">We provide security from cyber threats and a secure internet service.</p>
        </div>
        <div className="illustration-box">
        <img className="landing-illustration" src="media/2.png" alt="Cyber Security"></img>
        </div>
        </div>
    );
}

export default Landing;