import React from "react";
import { useState } from "react";
import "../../App.css";
import useToggle from "../../hooks/useToggle";

const TopNavbar = () => {
  const {isOpen,handleToggle} = useToggle()
  
  return (
    <div className="navbar-top">
      <ul className={`nav ${isOpen ? 'flex' : 'none'}`}>
        <li className="top-item">
          <a href="#">Home</a>
        </li>
        <li className="top-item">
          <a href="#">Home</a>
        </li>
        <li className="top-item">
          <a href="#">Home</a>
        </li>
        <li className="top-item">
          <a href="#">Home</a>
        </li>
        <li className="top-item">
          <a href="#">Home</a>
        </li>
      </ul>
      <div onClick={() => handleToggle("")} className="close">
        <span >+</span>
      </div>
    </div>
  );
};

export default TopNavbar;
