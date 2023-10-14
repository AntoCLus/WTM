import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./NavBar.css";

const NavBar = ({ isOpen }) => {
  const [expanded, setExpanded] = useState(isOpen);

  const handleToggle = (expanded) => {
    setExpanded(expanded);
  };

  return (
    <SideNav expanded={expanded} onToggle={handleToggle} className="sidenav">
      <SideNav.Nav defaultSelected="expenses" className="icons">
        <NavItem eventKey="logo">
          <NavIcon>
            <img src="images/logo.png" alt="Logo" />
          </NavIcon>
          <NavText>
            <Link to="/logo" className="texto-negro">
              Logo
            </Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="expenses">
          <NavIcon>
            <i className="fa fa-fw fa-money"></i>
          </NavIcon>
          <NavText>
            <Link to="/expenses" className="texto-negro">
              My Expenses
            </Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="income">
          <NavIcon>
            <i className="fa fa-fw fa-money"></i>
          </NavIcon>
          <NavText>
            <Link to="/income" className="texto-negro">
              My Income
            </Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="taxes">
          <NavIcon>
            <i className="fa fa-fw fa-money"></i>
          </NavIcon>
          <NavText>
            <Link to="/taxes" className="texto-negro">
              My Taxes
            </Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="login">
          <NavIcon>
            <i className="fa fa-fw fa-sign-in-alt"></i>
          </NavIcon>
          <NavText>
            <Link to="/login" className="texto-negro">
              Login
            </Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default NavBar;