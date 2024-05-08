import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ searchedData }) => {
  //console.log(searchedData.data.data[0].name+`[${searchedData.data.data[0].set.ptcgoCode}-${searchedData.data.data[0].set.total}]`)
  return <div>
    { searchedData? searchedData.data.data.map(res => <article>
      <Link to={`/detailview/${res.name+`[${res.set.ptcgoCode}-${res.set.total}]`}`}>
        <img src={res.images.small} alt={res.name+`[${res.set.ptcgoCode}-${res.set.total}]`}/>
      </Link>
      
    </article>
    ) : null }
  </div>;
};

export default Cards;
