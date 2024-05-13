const queries = require("../queries/collection.queries"); // Queries SQL
const pool = require("../config/db_pgsql");


// GET all
const getAllCards = async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        //console.log("Esto es el id de models: "+id)
        const data = await client.query(queries.getAllCards, [id]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

// CREATE new card
const createNewCard = async (card) => {
    const { id, name, number, set, img_url, user_id } = card;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createNewCard, [
            id,
            name,
            number,
            set,
            img_url
        ]);
        result = data.rowCount;
        if (result) {
            const updateUsersCollection = await client.query(queries.createNewUserCollection, [user_id, id]) // Da igual como se llamen, solo sabe que lo que le de en la posición 1 del array [user_id, id] va a ser el el valor de user_id en la query y que el segundo va a ser el de poke_id
            result += updateUsersCollection.rowCount;
        }
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

// UPDATE
const updateCard = async (author) => {
    const { normal_foil, holo_foil, reverse_foil, play_pokemon, play_pokemon_foil, id } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateCard, [
            normal_foil,
            holo_foil,
            reverse_foil,
            play_pokemon,
            play_pokemon_foil,
            id
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

// DELETE
const deleteCard = async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteCard, [id]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};


const pct = {
    getAllCards,
    createNewCard,
    updateCard,
    deleteCard
};

module.exports = pct;

//PRUEBAS

//createNewCard('swsh6-45', 'Ice Rider Calyrex V', '45', 'Chilling Reign', 'https://images.pokemontcg.io/swsh6/45.png').then(data=>console.log(data))