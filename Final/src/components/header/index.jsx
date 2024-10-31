// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import search from '../assets/images/procurar.png';
import logo from '../assets/images/logo.png';
import './style.css';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    // Se o clique ocorrer fora do dropdown, fechamos o menu
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Adiciona um evento de clique ao documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove o evento de clique ao desmontar o componente
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='header'>
        <img id='logo' src={logo} alt="Logo" />
        <header>
          <h2 className='title'> Brapedia </h2>
        </header>

        <nav>
          <ul className="menu">
            <li><a href="#">Início</a></li>
            <li><a href="#">Discord</a></li>
            <li className="dropdown" ref={dropdownRef}>
              <button className="dropbtn" onClick={toggleDropdown}>
                Mais &#9662;
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <h3>Social</h3>
                  <a href="#">Github</a>
      
                  <a href="#">X (Twitter)</a>
                 
                  <a href="#">Instagram</a>
               
                </div>
              )}
            </li>
          </ul>
        </nav>

        <button id='search'>
          <img id='search-icon' src={search} alt="Search Icon" />
        </button>
        <input className='pesquisa' type="text" placeholder='Search' />
      </div>
    </>
  );
}
