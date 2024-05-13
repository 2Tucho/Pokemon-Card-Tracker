import { useState, useEffect, useRef } from "react";
import axios from 'axios';

const Collection = () => {
  const [collectionCards, setCollectionCards] = useState([]);
  const normalRef = useRef();
  const holoRef = useRef();
  const reverseRef = useRef();
  const playRef = useRef();
  const playFoilRef = useRef();

  useEffect(() => {
    async function getCollection() {
      try {
        const userId = 1
        const cards = await axios.get(`http://localhost:3000/api/collection?user_id=${userId}`)
        console.log(cards.data)
        setCollectionCards(cards.data)
      }
      catch (error) {
        console.log("ERROR: NOT FOUND")
        //console.log(error.message)
      }
    }

    getCollection()
  }, [])

  /* async function updateCollection(id) {
    try {
      await axios.put("http://localhost:3000/api/collection", {
        "normal_foil": normalRef.current.value,
        "holo_foil": holoRef.current.value,
        "reverse_foil": reverseRef.current.value,
        "play_pokemon": playRef.current.value,
        "play_pokemon_foil": playFoilRef.current.value,
        "id": id
      })
    }
    catch {
      console.log("ERROR: NOT FOUND")
    }
  }; */

  async function deleteCard(id) {
    try {
      console.log(id)
      await axios.delete(`http://localhost:3000/api/collection?card_id=${id}`)
    }
    catch {
      console.log("ERROR: NOT FOUND")
    }
  };

  return (<section className="collection">
    <h1>Collection</h1>
    {collectionCards.map((data, i) => {
      return <article key={i}>
        <button onClick={() => deleteCard(data.id)}>Delete</button>
        <img src={data.img_url} alt={data.name} />
        <p>{data.name}</p>
        <p>{data.number}</p>
        <p>{data.set}</p>
        <div>
          <input type="number" ref={normalRef} defaultValue={data.normal_foil}></input>
          <input type="number" ref={holoRef} defaultValue={data.holo_foil}></input>
          <input type="number" ref={reverseRef} defaultValue={data.reverse_foil}></input>
          <input type="number" ref={playRef} defaultValue={data.play_pokemon}></input>
          <input type="number" ref={playFoilRef} defaultValue={data.play_pokemon_foil}></input>
        </div>
        <button onClick={() => updateCollection(data.id)}>Apply changes</button>
      </article>
    })}
  </section>)
};

export default Collection;
