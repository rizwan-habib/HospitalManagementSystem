const express = require('express');
const appoinmentRoutes = express.Router();
const {  getInformation } = require('../controllers/appoinment.controller');

appoinmentRoutes.route('/getInformation').post(getInformation);


module.exports = appoinmentRoutes;
