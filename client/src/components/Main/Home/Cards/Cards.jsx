import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchDataContext } from "../../../../context/SearchDataContext";

const Cards = () => {
  const searchedData = useContext(SearchDataContext);
  //console.log(searchedData.searchedData)

  return <div className="cards">
    { searchedData.searchedData? searchedData.searchedData.map((res, i) => {
    return <article key={i}>
      <Link to={`/detailview/${res.id}`}>
        <img src={res.images.small} alt={res.name+`[${res.set.ptcgoCode}-${res.number}]`}/>
      </Link>
      <p>{res.name}</p>
      { res.set.ptcgoCode ? <p>{`[${res.set.ptcgoCode}-${res.number}]`}</p> :
        res.set.name == "Scarlet & Violet" ? <p>{`[SVI-${res.number}]`}</p> :
        res.set.name == "Paldea Evolved" ? <p>{`[PAL-${res.number}]`}</p> :
        res.set.name == "Obsidian Flames" ? <p>{`[OBF-${res.number}]`}</p> :
        res.set.name == "151" ? <p>{`[MEW-${res.number}]`}</p> :
        res.set.name == "Paradox Rift" ? <p>{`[PAR-${res.number}]`}</p> : 
        res.set.name == "Paldean Fates" ? <p>{`[PAF-${res.number}]`}</p> : 
        res.set.name == "Temporal Forces" ? <p>{`[TEF-${res.number}]`}</p> : 
        res.set.name == "Scarlet & Violet Black Star Promos" ? <p>{`[TEF-${res.number}]`}</p> : 
        <p>{`[${res.set.id}-${res.number}]`}</p>}
    </article>}) : null }
  </div>;
};

export default Cards;
