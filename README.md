# Pokemon-Card-Tracker
Pokemon TCG search and collection app


RUTAS API

POST api/login --> Para hacer el login --> Cambia en la BBDD login = true
POST api/logout --> Para hacer el logout --> Cambia en la BBDD login = false

GET api/collection --> Para que aparezcan la colección del usuario --> Pinta los datos de las cartas en /collection
POST api/collection --> Para añadir cartas a la colección --> Al apretar el botón de favoritos guarda la carta nueva en la BBDD
PUT api/collection --> Para editar la cantidad de cartas en la colección --> Permite editar el número de cartas de cada tipo en la colección
DELETE api/collection --> Para eliminar carta de la colección --> Al clickar el botón implementado en /collection elimina la carta a la que esté conectado