import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <h3>Ariândex</h3>
        <ul>
          <li><Link to ='/register'>Login</Link></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Random</a></li>
        </ul>
      </div>
    </>
  );
}