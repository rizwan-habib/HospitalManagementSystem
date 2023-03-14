const express = require('express');
const diseaseRoutes = express.Router();
const {  getInformation } = require('../controllers/disease.controller');

diseaseRoutes.route('/getInformation').post(getInformation);


module.exports = diseaseRoutes;
