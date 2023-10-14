import React, { useState } from 'react';
import './LandingPage.css'; 

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="left-content">
                <h1>Welcome to Our Website</h1>
                <p>Some introductory text...</p>
            </div>
            <div className="right-content">
                <img src="path_to_your_image.jpg" alt="Description" />
            </div>
            <div className="bottom-content">
                <p>Text at the bottom...</p>
            </div>
            <div className="navbar">
                <button>Login</button>
            </div>
        </div>
    );
}

export default LandingPage;