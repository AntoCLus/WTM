import React, { useState } from 'react';
import './LandingPage.css'; 
import wtmImage from '../images/wtm.jpg';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LandingPage() {
    return (
        <div className="landing-page">
        <div className="left-content">
            <h1>Welcome to WTM</h1>
            <p>Get your income calculated and stop asking yourself the question where did my salary go now? Let’s make a change together.</p>
            <div class= "container">
            <img class = "container-image" src={wtmImage} alt="Description" style={{ float: 'right', width: '300px', height: '200px' }}/>
        </div>
        <div class="text-block">
        <h4>Login</h4>
        <Link to="/">
          <FontAwesomeIcon icon={faSignIn} />
        </Link>

            </div>
           
  </div>
        <div className="bottom-content">
            <p>Add your daily expenses with a reminder, your monthly 
          taxes and your extras. Go to overview to retrieve all the info....</p>
        </div>
        
    </div>
);
}
export default LandingPage;