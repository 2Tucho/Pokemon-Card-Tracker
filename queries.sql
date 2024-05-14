/* Para crear las tablas */
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
  id varchar(255),
  name varchar(255),
  number varchar(255),
  set varchar(255),
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
  user_id bigint NOT NULL,
  poke_id varchar(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (poke_id) REFERENCES collection(id) ON DELETE CASCADE
);



/*************** GET ***************/
SELECT * FROM collection as c
INNER JOIN users_collection as uc ON c.id = uc.poke_id
WHERE uc.user_id = 1



/*************** POST ***************/

/* Registrar un nuevo usuario */
INSERT INTO users (id, user_name, password, login)
VALUES (01, 'user1', 'temp123', true);

/* Agregar una carta a favoritos */
INSERT INTO collection (id, name, number, set, img_url, normal_foil, holo_foil, reverse_foil, play_pokemon, play_pokemon_foil)
VALUES ('sv4pt5-232', 'Mew ex', 232, 'Paldean Fates','https://images.pokemontcg.io/sv4pt5/232.png', 1, 0, 0, 0, 0),
('swsh10-40', 'Origin Forme Palkia VSTAR', 40, 'Astral Radiance','https://images.pokemontcg.io/swsh10/40.png', 1, 0, 0, 0, 0),
('xy7-84',	'Sceptile-EX', '84',	'Ancient Origins', 'https://images.pokemontcg.io/xy7/84.png', 1, 0, 0, 0, 0),
('sv4-193',	'Plusle',	'193', 'Paradox Rift', 'https://images.pokemontcg.io/sv4/193.png', 1, 0, 0, 0, 0),
('swsh6-181',	'Metagross V', '181', 'Chilling Reign', 'https://images.pokemontcg.io/swsh6/181.png', 1, 0, 0, 0, 0);

/* Tabla relacional */
INSERT INTO users_collection (user_id, poke_id)
VALUES (1, 'sv4pt5-232'),
(1, 'swsh10-40'),
(1, 'xy7-84'),
(1, 'sv4-193'),
(1, 'swsh6-181');



/*************** PUT ***************/

/* Cambiar el estado de loggeado a no loggeado */
UPDATE users
SET login = false
WHERE id = 1;

/* Cambiar la cantidad de cartas en la colección*/
UPDATE collection
SET normal_foil = 4, holo_foil = 2, reverse_foil = 1, play_pokemon = 2, play_pokemon_foil = 0
WHERE id = 'sv4pt5-232';



/*************** DELETE ***************/

/* Quitar una carta de la colección */
DELETE FROM collection 
WHERE id = 'sv4pt5-232';
