import React, { useState } from 'react';
import './LandingPage.css'; 

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="left-content">
                <h1>Welcome to WTM</h1>
                <p>Get your income calculated and stop asking yourself the question where did my salary go now? Let’s make a change together.</p>
            </div>
            <div className="right-content">
                <img src="../images/wtm.jpg" alt="Description" />
            </div>
            <div className="bottom-content">
                <p>Add your daily expenses with a reminder, your monthly 
              taxes and your extras. Go to overview to retrieve all the info....</p>
            </div>
            <div className="navbar">
                <button>Login</button>
            </div>
        </div>
    );
}

export default LandingPage;