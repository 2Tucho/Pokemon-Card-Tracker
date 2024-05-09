SELECT * FROM collection;

CREATE TABLE users
  (
  id bigint NOT NULL,
  user_name varchar(255),
  password varchar(255),
  login boolean,
  PRIMARY KEY (id)
);

CREATE TABLE collection
  (
  id bigint NOT NULL,
  name varchar(255),
  number int,
  img_url varchar(255),
  normal_foil int,
  holo_foil int,
  reverse_foil int,
  play_pokemon int,
  play_pokemon_foil int,
  PRIMARY KEY (id)
);

CREATE TABLE users_collection
  (
  id bigint NOT NULL,
  user_id bigint NOT NULL,
  poke_id bigint NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (poke_id) REFERENCES collection(id)
);



/*************** POST ***************/

/* Registrar un nuevo usuario */
INSERT INTO users (id, user_name, password, login)
VALUES (01, 'user1', 'temp123', true);

/* Agregar una carta a favoritos */
INSERT INTO collection (id, name, number, img_url, normal_foil, holo_foil, reverse_foil, play_pokemon, play_pokemon_foil)
VALUES (01, 'Mew ex', '232', 'https://images.pokemontcg.io/sv4pt5/232.png', 0, 0, 0, 0, 0);

/* Tabla relacional */
INSERT INTO users_collection (id, user_id, poke_id)
VALUES (01, 01, 01);



/*************** PUT ***************/

/* Cambiar el estado de loggeado a no loggeado */
UPDATE users
SET login = false
WHERE id = 1;

/* Cambiar la cantidad de cartas en la colección*/
UPDATE collection
SET normal_foil = 4, holo_foil = 2, reverse_foil = 1, play_pokemon = 2, play_pokemon_foil = 0
WHERE id = 1;



/*************** DELETE ***************/

/* Quitar una carta de la colección */
DELETE FROM users_collection
WHERE id = 1;
DELETE FROM collection 
WHERE id = 1;