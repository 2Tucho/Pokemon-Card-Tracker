import React from "react";
import { Link } from "react-router-dom";

const NoLogged = () => {
  return <nav className="nav nav-no-logged">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <h1>PCT</h1>
    <p>Pokémon Card Tracker</p>
  </ul>
</nav>;;
};

export default NoLogged;
