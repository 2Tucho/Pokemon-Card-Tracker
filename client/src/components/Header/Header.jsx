import React from "react";
import Logged from "./Logged";
import NoLogged from "./NoLogged";

//Hacer el ternario para que si estás logeado que aparezca el header con el componente Logged y sino con NoLogged

const Header = () => {
  return <header className="header">
    <Logged />
    {/* <NoLogged /> */}
  </header>;
};

export default Header;
