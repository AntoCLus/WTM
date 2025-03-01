import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import './Header.css'; 
import LandingPage from '../components/LandingPage';
import { Link } from 'react-router-dom'; 
       

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container-header">
      <div className="logo-header">
      </div>
      <div className="nav">
    </div> 
    </div>
  );
}

//export default Header;
/*<div className="nav">
<Link to="/home">
<FontAwesomeIcon icon={faHome} />
</Link>
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
</div> */