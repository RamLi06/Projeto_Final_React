import React, { useState } from "react";
import "./style.css";

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
        <h3>Menu Lateral</h3>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Random</a></li>
        </ul>
      </div>
    </>
  );
}