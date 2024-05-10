const queries = require("../queries/collection.queries"); // Queries SQL
const pool = require("../config/db_pgsql");


// GET all
const getAllCards = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllCards);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

// CREATE
/* const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [
            name,
            surname,
            email,
            image,
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}; */

// UPDATE
/* const updateAuthor = async (author) => {
    const { name, surname, email, image, old_email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [
            name,
            surname,
            email,
            image,
            old_email
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}; */

// DELETE
/* const deleteAuthor = async (author) => {
    const { email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor, [ email ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}; */


const pct = {
    getAllCards
    /* createAuthor,
    updateAuthor,
    deleteAuthor */
};

module.exports = pct;

//PRUEBAS

//getAuthorByNameSurname("Alvaru", "Riveru").then(data=>console.log(data))

/* getAllAuthors()
.then(data=>console.log(data)) */