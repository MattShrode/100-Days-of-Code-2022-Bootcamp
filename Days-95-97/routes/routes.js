const express = require('express');

const routesController = require('../controllers/routes.controller');

const router = express.Router();

router.get('/quote', routesController.returnString);

module.exports = router;