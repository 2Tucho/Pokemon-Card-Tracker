const collection = require('../models/collection.model');

//Poner un try y un catch en todos los métodos de controladores

// GET http://localhost:3000/api/collection--> ALL

const getAllCards = async (req, res) => {
    const user_id = req.body; // {user_id}
    let cards = await collection.getAllCards(user_id);
    res.status(200).json(cards); // [] con las cartas encontradas
};

// POST http://localhost:3000/api/collection
const createNewCard = async (req, res) => {
    const newCard = req.body; // {id, name, number, set, img_url, user_id}
    console.log(newCard)
    const response = await collection.createNewCard(newCard);
    res.status(201).json({
        "card_added": response,
        data: newCard
    });
};

// UPDATE http://localhost:3000/api/authors
const updateCard = async (req, res) => {
    const modifiedCard = req.body; // {normal_foil, holo_foil, reverse_foil, play_pokemon, play_pokemon_foil, id}
    const response = await collection.updateCard(modifiedCard);
    res.status(200).json({
        "card_updated": response,
        data: modifiedCard
    });
};

// DELETE http://localhost:3000/authors
const deleteCard = async (req, res) => {
    const deletedCard = req.body; // {id} //req.body pilla lo del cuerpo de la petición y req.query lo que haya en la url
    const response = await collection.deleteCard(deletedCard);
    res.status(200).json({
        "card_deleted": response,
        data: deletedCard
    });
}; //Llamada al de entries y que si tiene entradas que no se borre. Y si queremos borrarlo al menos que no se vean las entries de ese autor, o si lo queremos borrar se puede crear una SQL query especial que borre en cascada las entries de ese autor. O icluso borrar entries y authors con lo existente ya en el código. También se puede crear un author genérico en base de datos y cuando se borre un author reasignar con update sus entradas al autor genérico. Por último, por diversas razones conviene no perder al autor con sus entradas y existe la opción de que haya una columna de disable true/false para esconderlo hasta que llegue el momento de deshacerse de ello en otro momento (con un update)

module.exports = {
    getAllCards,
    createNewCard,
    updateCard,
    deleteCard 
};

/* getAuthors() */