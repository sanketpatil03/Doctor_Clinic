import React, { useState } from "react";
import "./Navbar.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "./Pages/images/Untitled_design__1_-removebg-preview.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav_logo">
          <img src={logo} alt="" id="logo_image" />
          <span>FAMILYCARE</span>
        </div>
        <div className="nav_pages">
          <NavLink to="/" className={({isActive})=>`nav_links ${isActive ? "blue" : "black"}`}>
            Home
          </NavLink>
          <NavLink to="/services" className={({isActive})=>`nav_links ${isActive ? "blue" : "black"}`}>
            Services
          </NavLink>
          <NavLink to="/contactus" className={({isActive})=>`nav_links ${isActive ? "blue" : "black"}`}>
            Contact Us
          </NavLink>
          <NavLink to="/appointment" className={({isActive})=>`nav_links ${isActive ? "blue" : "black"}`}>
            Appointment
          </NavLink>
        </div>
        <div className="nav_Authentication">
          <NavLink to="/login" id="nav_btn1" className="nav-authentication">
            Login
          </NavLink>
          <NavLink to="/signup" id="nav_btn2" className="nav-authentication">
            Sign Up
          </NavLink>
          <div onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <RxCross2 size={25} className="hamburger"/>
            ) : (
              <CgMenuRight className="hamburger" size={28} />
            )}
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          className= "setResponsive_navbar"
        >
          <a href=" " className="nav-links">
            Home
          </a>
          <a href=" " className="nav-links">
            Services
          </a>
          <a href=" " className="nav-links">
            Contact Us
          </a>
          <a href=" " className="nav-links">
            Appointment
          </a>
          <a href=" " className="nav-links">
            Login
          </a>
          <a href=" " className="nav-links">
            Sign Up
          </a>
        </div>
      )}
     
    </div>
  );
}

export default Navbar;
