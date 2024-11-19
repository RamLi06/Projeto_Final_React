import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastRoute, setLastRoute] = useState(null); 
  const navigate = useNavigate();


    const routes = [
    "/Herbkeeper",
    "/Grasstalker",
    "/Foresterror",
    "/Flabull",
    "/Toadflame",
    "/Frokkuna"]; 


  const handleRandomRedirect = () => {
   
    const availableRoutes = routes.filter((route) => route !== lastRoute);


    const randomRoute =
      availableRoutes[Math.floor(Math.random() * availableRoutes.length)];

 
    setLastRoute(randomRoute);
    navigate(randomRoute, { replace: true });
  };


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
