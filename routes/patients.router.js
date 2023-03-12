const express = require('express');
const patientRoutes = express.Router();
const {takeAppoinment,getDoctors,cancelAppoinment,getAppoinment} = require('../controllers/patient.controller');


patientRoutes.route('/getDoctors').get(getDoctors);
patientRoutes.route('/appoinment').post(takeAppoinment);
patientRoutes.route('/appoinment').get(getAppoinment);
patientRoutes.route('/cancelAppoinment').post(cancelAppoinment);


module.exports = patientRoutes;
