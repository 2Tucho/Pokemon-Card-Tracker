import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ searchedData }) => {

  return <div className="cards">
    { searchedData? searchedData.data.data.map(res => 
    <article>
      <Link to={`/detailview/${res.name+`[${res.set.ptcgoCode}-${res.number}]`}`}>
        <img src={res.images.small} alt={res.name+`[${res.set.ptcgoCode}-${res.number}]`}/>
      </Link>
      <p>{res.name}</p>
      <p>{`[${res.set.ptcgoCode}-${res.number}]`}</p>
    </article>
    ) : null }
  </div>;
};

export default Cards;
