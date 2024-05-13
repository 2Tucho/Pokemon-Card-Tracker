const express = require('express');
const router = express.Router();
const collectionController = require("../controllers/collection.controller");

router.get('/', collectionController.getAllCards);
router.post('/', collectionController.createNewCard);
router.put('/', collectionController.updateCard);
router.delete('/', collectionController.deleteCard);

module.exports = router;