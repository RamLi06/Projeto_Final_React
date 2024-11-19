import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const routes = [
    "/Herbkeeper",
    "/Grasstalker",
    "/Foresterror",
    "/Flabull",
    "/Toadflame"];

 
  const handleRandomRedirect = () => {
    const randomRoute = routes[Math.floor(Math.random() * routes.length)];
    navigate(randomRoute);
  };

 
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão para abrir a sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <h3>Ariândex</h3>
        <ul>
          {/* Botão para redirecionar para uma rota aleatória */}
          <li>
            <button id="butao-random" onClick={handleRandomRedirect}><a>Random</a></button>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          
        </ul>
      </div>
    </>
  );
}
