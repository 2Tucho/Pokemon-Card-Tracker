import { useState, useContext, useEffect } from "react";
import { SearchDataContext } from "../../../context/SearchDataContext";
import { useParams } from "react-router-dom";
import axios from 'axios';

const DetailView = () => {
  const [cardDetail, setCardDetail] = useState("");
  const searchedData = useContext(SearchDataContext);
  const pokeId = useParams();

  useEffect(() => {
    /* console.log(pokeId.id)
    console.log(searchedData.searchedData)
    console.log(typeof searchedData) */
    let result = searchedData.searchedData.find(e => e.id == pokeId.id); // Busco pokeId.id porque el parámetro lo guarada en un objeto cuya propiedad es id y su valor es el número del pokémon que estoy buscando
    setCardDetail(result);
    console.log(cardDetail)
  }, [pokeId.id]) // Los useEffect los hace TODOS la primera vez

  /* Funcion que hace el fetch a localhost3000/apicollection. Por el body le mando los parametros a guardar. Con axios es mas facil porque pones la ruta en el primer parametro y en el segundo un objeto que tiene dentro los parametros que le paso por body */
  async function addCard() {
    try {
      await axios.post("http://localhost:3000/api/collection", {
        "id": cardDetail.id, 
        "name": cardDetail.name, 
        "number": cardDetail.number, 
        "set": cardDetail.set.name, 
        "img_url": cardDetail.images.small,
        "user_id": 1
      })
    }
    catch {
      console.log("ERROR: NOT FOUND")
    }
  };

  return <>
    <button onClick={addCard}>Like</button>
    {cardDetail ? <section className="detail-view">
      <article className="card-img">
        <img src={cardDetail.images.large} alt={cardDetail.name} />
      </article>

      <article className="card-basic-info">
        <article>
          <h2>{cardDetail.name}</h2>
          <h3>{cardDetail.supertype}{cardDetail.subtypes ? `- ${cardDetail.subtypes.toString().replaceAll(",", ", ")}` : null}</h3>
        </article>
        {cardDetail.hp ? <p className="hp-type-row">HP {cardDetail.hp} {cardDetail.types}</p> : null}
      </article>

      {cardDetail.attacks ? <article className="card-attacks-info">
        {cardDetail.abilities ? <h6>ABILITY</h6> : null}
        {cardDetail.abilities ? <section className="ability">
          <div>
            <img src="../../../../public/ability.png" alt="" />
            <p>{cardDetail.abilities[0].name}</p>
          </div>
          <p>{cardDetail.abilities[0].text}</p>
        </section> : null}

        <h6>ATTACKS</h6>
        <section>
          <div>
            <p>{cardDetail.attacks[0].cost} {cardDetail.attacks[0].name}</p>
            <p>{cardDetail.attacks[0].damage}</p>
          </div>
          <p>{cardDetail.attacks[0].text}</p>
        </section>
        {cardDetail.attacks[1] ? <section>
          <div>
            <p>{cardDetail.attacks[1].cost} {cardDetail.attacks[1].name}</p>
            <p>{cardDetail.attacks[1].damage}</p>
          </div>
          <p>{cardDetail.attacks[1].text}</p>
        </section> : null}
        {cardDetail.attacks[2] ? <section>
          <div>
            <p>{cardDetail.attacks[2].cost} {cardDetail.attacks[2].name}</p>
            <p>{cardDetail.attacks[2].damage}</p>
          </div>
          <p>{cardDetail.attacks[2].text}</p>
        </section> : null}
      </article> : null}

      <article className="card-rules-info">
        <p className="rules-text">{cardDetail.rules}</p>
      </article>

      <article className="weak-res-reat-raw">
        {cardDetail.weaknesses ? <section className="card-bottom-info">
          <h6>WEAKNESS</h6>
          <p>{cardDetail.weaknesses[0].type} {cardDetail.weaknesses[0].value}</p>
        </section> : null}
        {cardDetail.resistances ? <section className="card-bottom-info">
          <h6>RESISTANCES</h6>
          <p>{cardDetail.resistances[0].type} {cardDetail.resistances[0].value}</p>
        </section> : null}
        {cardDetail.retreatCost ? <section className="card-bottom-info">
          <h6>RETREAT COST</h6>
          <p>{cardDetail.retreatCost}</p>
        </section> : null}
      </article>

      <article id="card-variety-info-1">
        {cardDetail.artist ? <section class="card-bottom-info">
          <h6>ARTIST</h6>
          <p>{cardDetail.artist}</p>
        </section> : null}
        <section class="card-bottom-info">
          <h6>RARITY</h6>
          <p>{cardDetail.rarity}</p>
        </section>
        <section class="card-bottom-info">
          <h6>SET</h6>
          <p>{cardDetail.set.name}</p>
        </section>
      </article>

      <article id="card-variety-info-2">
        <section class="card-bottom-info">
          <h6>NUMBER</h6>
          <p>{cardDetail.number} / {cardDetail.set.printedTotal}</p>
        </section>
        {cardDetail.regulationMark ? <section class="card-bottom-info">
          <h6>REGULATION</h6>
          <p>{cardDetail.regulationMark}</p>
        </section> : null}
      </article>
    </section> : null}
  </>
};

export default DetailView;
