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
        <h1>PCT</h1>
        <p>Pokémon Card Tracker</p>
      </div>
  </nav>;
};

export default Logged;
