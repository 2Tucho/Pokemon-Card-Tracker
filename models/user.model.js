const queries = require("../queries/user.queries"); // Queries SQL
const pool = require("../config/db_pgsql");

// UPDATE
const updateLoginTrue = async (author) => {
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
};

const user = {
    updateupdateLoginTrue
    /* createAuthor,
    updateAuthor,
    deleteAuthor */
};

module.exports = user;