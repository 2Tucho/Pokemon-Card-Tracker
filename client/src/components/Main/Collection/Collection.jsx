import { useState, useEffect } from "react";
import axios from 'axios';

const Collection = () => {
  const [collectionCards, setCollectionCards] = useState(null)

  useEffect(() => {
    async function getCollection () {
      try {
        const cards = await axios.get("http://localhost:3000/api/collection", {
          "id": 1
        })
        console.log(cards)
        setCollectionCards(cards)
        console.log(collectionCards)
      }
      catch {
        console.log("ERROR: NOT FOUND")
      }
    }

    getCollection()
  }, [])

  return <section className="collection">
    <h1>Collection</h1>
  </section>;
};

export default Collection;
