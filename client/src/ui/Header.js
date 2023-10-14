import  { useState } from "react";
import NavBar  from "./NavBar";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
//import { useAuthStore } from "../hooks/useAuthStore";


 const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  //const {status} = useAuthStore();

  
  const handleToggleNavBar= () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-header">
      <header>
      <button className="toggle-button" onClick={handleToggleNavBar}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="toggle-icon"
          />
        </button>
        <div className="container-logo">
          <img src="./images/logo.png" alt="logo" className="logo-header" />
        </div>
       
      </header>
      <NavBar isOpen={isOpen} />
    </div>
  );
};
export default Header;