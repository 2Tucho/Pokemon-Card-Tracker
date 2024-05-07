import React from "react";

const Search = () => {
  return <div className="search">
    <div>
      <p>Order by...</p>
      <select className="order-by">

        <optgroup label="Date">
          <option>Added ↓</option>
          <option selected>Released ↓</option>
          <option>Updated ↓</option>
          <option>Added ↑</option>
          <option>Released ↑</option>
          <option>Updated ↑</option>
        </optgroup>
        <optgroup label="Characteristics">
          <option>HP ↓</option>
          <option>Retreat Cost ↓</option>
          <option>Set Name ↓</option>
          <option>HP ↑</option>
          <option>Retreat Cost ↑</option>
          <option>Set Name ↑</option>
        </optgroup>
        <optgroup label="Other">
          <option>Name ↓</option>
          <option>Rarity ↓</option>
          <option>Type ↓</option>
          <option>Name ↑</option>
          <option>Rarity ↑</option>
          <option>Type ↑</option>
        </optgroup>
      </select>

      <p>Filter by...</p>
      <select className="filter-by-format">
        <option disabled selected>-- Format --</option>
        <option value="Standard">Standard</option>
        <option value="Expanded">Expanded</option>
        <option value="Unlimited">Unlimited</option>
      </select>
      <select className="filter-by-supertype">
        <option disabled selected>-- Supertype --</option>
        <option value="Pokémon">Pokémon</option>
        <option value="Trainers">Trainers</option>
        <option value="Energies">Energies</option>
      </select>
    </div>

    <form action="#">
      <input type="search" autoFocus />
      <button>Search</button>
    </form>
  </div>;
};

export default Search;
