const express = require('express');
const userController = require("../controllers/user.controller");
const router = express.Router();

router.put('/', userController.getAllCards);

module.exports = router;