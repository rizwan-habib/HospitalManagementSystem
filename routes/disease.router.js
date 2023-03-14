const express = require('express');
const diseaseRoutes = express.Router();
const { getInformation, getDiseases } = require('../controllers/disease.controller');

diseaseRoutes.route('/getInformation').post(getInformation);
diseaseRoutes.route('/all').get(getDiseases);


module.exports = diseaseRoutes;
