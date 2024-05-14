import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SearchDataContext } from "../../context/SearchDataContext";
import Collection from "./Collection";
import DetailView from "./DetailView";
import Home from "./Home";
import Login from "./Login";

//Hacer las rutas para las diferentes vistas

const Main = () => {
  const [searchedData, setSearchedData] = useState([]);

  return <main className="main">
    <SearchDataContext.Provider value={{ searchedData, setSearchedData }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/detailview/:id" element={<DetailView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </SearchDataContext.Provider>
  </main>;
};

export default Main;
