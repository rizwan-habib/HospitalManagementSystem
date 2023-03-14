const express = require('express');
const userRoutes = express.Router();
const {  getInformation } = require('../controllers/user.controller');

userRoutes.route('/getInformation').post(getInformation);


module.exports = userRoutes;
