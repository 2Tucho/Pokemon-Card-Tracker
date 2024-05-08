import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Collection from "./Collection";
import DetailView from "./DetailView";
import Home from "./Home";
import Login from "./Login";

//Hacer las rutas para las diferentes vistas

const Main = () => {
  return <main className="main">
    <h1>Main</h1>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/*" element={<Navigate to={"/"} />} />
      <Route path="/collection" element={<Collection />}/>
      <Route path="/detailview/:code" element={<DetailView />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  </main>;
};

export default Main;
