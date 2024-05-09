import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchDataContext } from "../../../../context/SearchDataContext";

const Cards = () => {
  const searchedData = useContext(SearchDataContext);
  console.log(searchedData.searchedData)

  return <div className="cards">
    { searchedData.searchedData? searchedData.searchedData.map(res => 
    <article>
      <Link to={`/detailview/${res.id}`}>
        <img src={res.images.small} alt={res.name+`[${res.set.ptcgoCode}-${res.number}]`}/>
      </Link>
      <p>{res.name}</p>
      <p>{`[${res.set.ptcgoCode}-${res.number}]`}</p>
    </article>
    ) : null }
  </div>;
};

export default Cards;
