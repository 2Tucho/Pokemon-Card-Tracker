const express = require('express');
const collectionController = require("../controllers/collection.controller");
const router = express.Router();

router.get('/', collectionController.getAllCards);
/* router.post('/', pctController.createAuthor);
router.put('/', pctController.updateAuthor);
router.delete('/', pctController.deleteAuthor); */

module.exports = router;