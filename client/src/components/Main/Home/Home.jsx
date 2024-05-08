import { useState } from "react";
import Cards from "./Cards";
import Search from "./Search";

const Home = () => {
  const [searchedData, setSearchedData] = useState(""); 

  return <section className="home">
    <Search setSearchedData={setSearchedData}/>
    <Cards searchedData={searchedData}/>
  </section>;
};

export default Home;
