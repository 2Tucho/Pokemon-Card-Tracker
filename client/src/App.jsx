import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import "./styles/views/_App.scss";

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
