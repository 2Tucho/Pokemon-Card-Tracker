const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");
require("dotenv").config();


// Rutas
const collectionRoutes = require("./routes/collection.routes")

//Middlewares
app.use(express.json()); // Para parsear el body de las peticiones
app.use(cors());
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

/******RUTAS ******/

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Home. Search your card!");
});

//API
//http://localhost:3000/api/collection
app.use("/api/collection", collectionRoutes);

//Si se va a cualquier otra p'agina que de el error
app.use("*", error404);

// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});