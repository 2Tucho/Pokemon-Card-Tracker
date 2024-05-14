const queries = {

    getAllCards: `
        SELECT * FROM collection as c
        INNER JOIN users_collection as uc ON c.id = uc.poke_id
        WHERE uc.user_id = $1;
            `,
    createNewCard: `
        INSERT INTO collection (id, name, number, set, img_url, normal_foil, holo_foil, reverse_foil, play_pokemon, play_pokemon_foil)
        VALUES ($1, $2, $3, $4, $5, 1, 0, 0, 0, 0);
        `,
    createNewUserCollection: `
        INSERT INTO users_collection (user_id, poke_id)
        VALUES ($1, $2) 
        `, // Para actualizar la tabla de relaciones entre users y collection
    updateCard: `UPDATE collection
        SET 
        normal_foil = $1, 
        holo_foil = $2, 
        reverse_foil = $3, 
        play_pokemon = $4, 
        play_pokemon_foil = $5
        WHERE id = $6;
            `,
    deleteCard: `DELETE FROM collection 
    WHERE id = $1;
        `

};

module.exports = queries;