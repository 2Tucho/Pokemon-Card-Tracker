const collection = require('../models/collection.model');

//Poner un try y un catch en todos los métodos de controladores

// GET http://localhost:3000/api/pct --> ALL

const getAllCards = async (req, res) => {
    let cards;
    cards = await collection.getAllCards();
    res.status(200).json(cards); // [] con las cartas encontradas
}

// POST http://localhost:3000/api/authors
/* const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,email,image}
    const response = await entry.createAuthor(newAuthor);
    res.status(201).json({
        "author_created": response,
        data: newAuthor
    });
} */

// UPDATE http://localhost:3000/api/authors
/* const updateAuthor = async (req, res) => {
    const modifiedAuthor = req.body; // {name,surname,email,image,old_email}
    const response = await entry.updateAuthor(modifiedAuthor);
    res.status(200).json({
        "author_updated": response,
        data: modifiedAuthor
    });
} */

// DELETE http://localhost:3000/authors
/* const deleteAuthor = async (req, res) => {
    const deletedAuthor = req.body; // {email} //req.body pilla lo del cuerpo de la petición y req.query lo que haya en la url
    const response = await entry.deleteAuthor(deletedAuthor);
    res.status(200).json({
        "author_deleted": response,
        data: deletedAuthor
    });
} */ //Llamada al de entries y que si tiene entradas que no se borre. Y si queremos borrarlo al menos que no se vean las entries de ese autor, o si lo queremos borrar se puede crear una SQL query especial que borre en cascada las entries de ese autor. O icluso borrar entries y authors con lo existente ya en el código. También se puede crear un author genérico en base de datos y cuando se borre un author reasignar con update sus entradas al autor genérico. Por último, por diversas razones conviene no perder al autor con sus entradas y existe la opción de que haya una columna de disable true/false para esconderlo hasta que llegue el momento de deshacerse de ello en otro momento (con un update)

module.exports = {
    getAllCards
    /* createAuthor,
    updateAuthor,
    deleteAuthor */
}

/* getAuthors() */