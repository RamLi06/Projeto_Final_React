import React, { useState, useEffect, useRef } from "react";
import search from '../assets/images/procurar.png';
import logo from '../assets/images/logo.png';
import './style.css';
import { Link } from "react-router-dom"; 

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
  
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
     
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='header'>
        <img id='logo' src={logo} alt="Logo" />
        <header>
          <h2 className='title'> Ariândex </h2>
        </header>

        <nav>
          <ul className="menu">
            <li><Link to ='/'>Início</Link></li>
            <li className="dropdown" ref={dropdownRef}>
              <button className="dropbtn" onClick={toggleDropdown}>
                Mais &#9662;
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <h3>Social</h3>
                  <a href="https://github.com/RamLi06">Github</a>
      
                  <a href="https://x.com/noraim239">X (Twitter)</a>
                 
                  <a href="https://www.youtube.com/watch?v=rzLIUgnKY40&ab_channel=VideoGameAF">Instagram</a>
               
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
