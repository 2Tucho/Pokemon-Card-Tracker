import React from "react";
import { Link } from "react-router-dom";

const Logged = () => {
  return <nav className="nav nav-logged">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/collection">Collection</Link></li>
      <li><Link to="#">Logout</Link></li>
    </ul>
    
    <div>
        <img src="../../../../public/PCT.png" alt="" />
        <p>Pokémon Card Tracker</p>
      </div>
  </nav>;
};

export default Logged;
