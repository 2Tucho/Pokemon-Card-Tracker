import { useState, useEffect } from "react";
import axios from "axios";

const Collection = () => {
  const [collectionCards, setCollectionCards] = useState([]);

  useEffect(() => {
    async function getCollection() {
      try {
        const userId = 1;
        const cards = await axios.get(`http://localhost:3000/api/collection?user_id=${userId}`);
        setCollectionCards(cards.data);
      }
      catch (error) {
        console.log(`ERROR: ${error}`);
      };
    };
    getCollection();
  }, []);

  const showCollection = async () => {
    try {
      const userId = 1;
      const cards = await axios.get(`http://localhost:3000/api/collection?user_id=${userId}`);
      setCollectionCards(cards.data);
    }
    catch (error) {
      console.log(`ERROR: ${error}`);
    };
  };

  async function updateCollection(id) {
    try {
      await axios.put("http://localhost:3000/api/collection", {
        "normal_foil": normalRef.current.value,
        "holo_foil": holoRef.current.value,
        "reverse_foil": reverseRef.current.value,
        "play_pokemon": playRef.current.value,
        "play_pokemon_foil": playFoilRef.current.value,
        "id": id
      });
    }
    catch {
      console.log("ERROR: NOT FOUND")
    };
  };

  function handleClick(id) {
    deleteCard(id);
    showCollection();
  };

  async function deleteCard(id) {
    try {
      await axios.delete(`http://localhost:3000/api/collection?card_id=${id}`);
    }
    catch {
      console.log("ERROR: NOT FOUND");
    };
  };

  return (<section className="collection">
    <div className="collection-h1">
      <h1>Collection</h1>
    </div>
    {collectionCards.map((data, i) => {
      return (<article key={i} className="collection-card">
        <img src={data.img_url} alt={data.name} />
        <div>
          <p className="collection-name"><strong>{data.name}</strong></p>
          <div className="number-set-collection">
            <p>#{data.number}</p>
            <p>{data.set}</p>
          </div>
          <div>
            <div>
              <label htmlFor="">Normal holo</label>
              <input type="number" defaultValue={data.normal_foil}></input>
            </div>
            <div>
              <label htmlFor="">Holo Foil</label>
              <input type="number" defaultValue={data.holo_foil}></input>
            </div>
            <div>
              <label htmlFor="">Reverse Foil</label>
              <input type="number" defaultValue={data.reverse_foil}></input>
            </div>
            <div>
              <label htmlFor="">Play! Pokémon Stamp</label>
              <input type="number" defaultValue={data.play_pokemon}></input>
            </div>
            <div>
              <label htmlFor="">Play! Pokémon Stamp Foil</label>
              <input type="number" defaultValue={data.play_pokemon_foil}></input>
            </div>
          </div>
          <div className="button-div">
            <button onClick={() => updateCollection(data.id)} className="aply-changes">Apply changes</button>
            <button onClick={() => handleClick(data.id)} className="delete-button">Delete</button>
          </div>
        </div>
      </article>
      )
    })}
  </section>);
};

export default Collection;
