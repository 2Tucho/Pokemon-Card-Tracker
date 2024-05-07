import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/views/_App.scss";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
