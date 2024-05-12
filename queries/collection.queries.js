const queries = {

    getAllCards: `
        SELECT * FROM collection as c
        INNER JOIN users_collection as uc ON c.id = uc.poke_id
        WHERE uc.user_id = $1
            `,
    postCard: `
        INSERT INTO collection (id, name, number, set, img_url, normal_foil, holo_foil, reverse_foil, play_pokemon, play_pokemon_foil)
        VALUES ('sv4pt5-232', 'Mew ex', 232, 'Paldean Fates','https://images.pokemontcg.io/sv4pt5/232.png', 0, 0, 0, 0, 0)
        `,
    updateCard: `UPDATE collection
        SET 
        normal_foil = 4, 
        holo_foil = 2, 
        reverse_foil = 1, 
        play_pokemon = 2, 
        play_pokemon_foil = 0
        WHERE id = 'sv4pt5-232';
            `,
    deleteCard: `DELETE FROM collection 
    WHERE id = 'sv4pt5-232'
        `
        
};

module.exports = queries;