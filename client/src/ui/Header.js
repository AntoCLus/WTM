import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import './Header.css'; 
import LandingPage from '../components/LandingPage';
//import { Link } from 'react-router-dom'; <Link to="../components/LandingPage">
       

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="../images/logo.png" alt="Logo" />
      </div>
      <div className="nav">
        <a href="../components/LandingPage">
          <FontAwesomeIcon icon={faHome} />
        </a>
      </div>
      <div className="user">
        {isLoggedIn ? (
          <>
            <FontAwesomeIcon icon={faUser} />
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <button onClick={handleLogin}>Log In</button>
        )}
      </div>
    </div>
  );
}

export default Header;