import { useState, useRef, useEffect, useContext } from "react";
import { debounce } from "lodash";
import { SearchDataContext } from "../../../../context/SearchDataContext";
import axios from "axios";

const Search = () => {
  const [inputCard, setInputCard] = useState("");
  const inputRef = useRef();
  const formatRef = useRef();
  const supertypeRef = useRef();
  const orderRef = useRef();
  const { setSearchedData } = useContext(SearchDataContext);

  useEffect(() => {
    let filterSupertypes = "";
    let filterFormat = "";
    let orderBy = "";

    if (supertypeRef.current.value == "Pokémon") {
      filterSupertypes = "supertype:pokemon"
    } else if (supertypeRef.current.value == "Trainers") {
      filterSupertypes = "supertype:trainer"
    } else if (supertypeRef.current.value == "Energies") {
      filterSupertypes = "supertype:energy"
    } else filterSupertypes = "";

    if (formatRef.current.value == "Standard") {
      filterFormat = "legalities.standard:legal"
    } else if (formatRef.current.value == "Expanded") {
      filterFormat = "legalities.expanded:legal"
    } else if (formatRef.current.value == "Unlimited") {
      filterFormat = "legalities.unlimited:legal"
    } else filterFormat = "legalities.unlimited:legal";

    if (orderRef.current.value == "Released ↓") {
      orderBy = "orderBy=-set.releaseDate"
    } else if (orderRef.current.value == "Updated ↓") {
      orderBy = "orderBy=-set.updatedAt"
    } else if (orderRef.current.value == "Released ↑") {
      orderBy = "orderBy=set.releaseDate"
    } else if (orderRef.current.value == "Updated ↑") {
      orderBy = "orderBy=set.updatedAt"
    } else if (orderRef.current.value == "HP ↓") {
      orderBy = "orderBy=-hp"
    } else if (orderRef.current.value == "Retreat Cost ↓") {
      orderBy = "orderBy=-convertedRetreatCost"
    } else if (orderRef.current.value == "HP ↑") {
      orderBy = "orderBy=hp"
    } else if (orderRef.current.value == "Retreat Cost ↑") {
      orderBy = "orderBy=convertedRetreatCost"
    } else if (orderRef.current.value == "Rarity ↓") {
      orderBy = "orderBy=-rarity"
    } else if (orderRef.current.value == "Rarity ↑") {
      orderBy = "orderBy=rarity"
    } else if (orderRef.current.value == "Set Name ↓") {
      orderBy = "orderBy=-set.name"
    } else if (orderRef.current.value == "Set Name ↑") {
      orderBy = "orderBy=set.name"
    } else if (orderRef.current.value == "Type ↓") {
      orderBy = "orderBy=-types"
    } else if (orderRef.current.value == "Type ↑") {
      orderBy = "orderBy=types"
    } else orderBy = "orderBy=-set.releaseDate";

    if(inputCard) {
      function fetchData() {
        const url = `https://api.pokemontcg.io/v2/cards?q=name:"*${inputCard}*"%20${filterSupertypes}%20${filterFormat}&${orderBy}`;
        const headers = {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        };
        try {
          axios.get(url, { headers })
            .then(response => setSearchedData(response.data.data))
            .catch(error => {
              console.error("There was an error!", error);
            });
        } catch {
          console.log("ERROR: NOT FOUND")
        }
      };
      fetchData();
    } else null
  }, [inputCard]);

  function searchCard() {
    setInputCard(inputRef.current.value)
  };

  const debouncedOnChange = debounce(searchCard, 1500);

  return <div className="search">
    <div>
      <p>Order by...</p>
      <select className="order-by" ref={orderRef} defaultValue="Released ↓">
        <optgroup label="Date">
          <option>Released ↓</option>
          <option>Updated ↓</option>
          <option>Released ↑</option>
          <option>Updated ↑</option>
        </optgroup>

        <optgroup label="Characteristics">
          <option>HP ↓</option>
          <option>Retreat Cost ↓</option>
          <option>HP ↑</option>
          <option>Retreat Cost ↑</option>
        </optgroup>

        <optgroup label="Other">
          <option>Rarity ↓</option>
          <option>Set Name ↓</option>
          <option>Type ↓</option>
          <option>Rarity ↑</option>
          <option>Set Name ↑</option>
          <option>Type ↑</option>
        </optgroup>
      </select>

      <p>Filter by...</p>
      <select className="filter-by-supertype" ref={supertypeRef} defaultValue="--Supertype--">
        <option disabled>--Supertype--</option>
        <option value="Pokémon">Pokémon</option>
        <option value="Trainers">Trainers</option>
        <option value="Energies">Energies</option>
      </select>

      <select className="filter-by-format" ref={formatRef} defaultValue="--Format--">
        <option disabled>--Format--</option>
        <option value="Standard">Standard</option>
        <option value="Expanded">Expanded</option>
        <option value="Unlimited">Unlimited</option>
      </select>
    </div>

    <form action="#">
      <input type="search" ref={inputRef} onChange={debouncedOnChange} placeholder="Search a card" autoFocus />
    </form>
  </div>;
};

export default Search;
