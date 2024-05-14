# Pokemon-Card-Tracker
Pokemon TCG search and collection app

TECNOLOGÍAS APLICADAS
 - HTML5
 - JAVASCRIPT
 - SASS
 - DOCKER
 - PG4ADMIN
 - POSTMAN
 - TRELLO
 - GITHUB
 - EXCALIDRAW


COSAS PENDIENTES

 - Que funcione el PUT. No he podido pillar los valores de los input para editar la cantidad de cartas en la colección
 - Que cuando se borre una carta de la colección se actualice la página al momento
 - Preparar el navegador para la vista de los usuarios que no están logeados
 - Impedir que se pueda dar a favoritos más de una vez y de error la consola
 - Hacer los media queries para adaptar la web a las pantallas de tableta y pc

FASE 2
 - Hacer un buscador dentro de la colección


RUTAS API

POST api/login --> Para hacer el login --> Cambia en la BBDD login = true
POST api/logout --> Para hacer el logout --> Cambia en la BBDD login = false

GET api/collection --> Para que aparezcan la colección del usuario --> Pinta los datos de las cartas en /collection
POST api/collection --> Para añadir cartas a la colección --> Al apretar el botón de favoritos guarda la carta nueva en la BBDD
PUT api/collection --> Para editar la cantidad de cartas en la colección --> Permite editar el número de cartas de cada tipo en la colección
DELETE api/collection --> Para eliminar carta de la colección --> Al clickar el botón implementado en /collection elimina la carta a la que esté conectado
