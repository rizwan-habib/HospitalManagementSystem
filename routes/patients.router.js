const express = require('express');
const patientRoutes = express.Router();
const { takeAppoinment, getDoctors, cancelAppoinment, getAppoinment, setUpProfile, getInformation } = require('../controllers/patient.controller');


patientRoutes.route('/getDoctors').post(getDoctors);
patientRoutes.route('/setUpProfile').post(setUpProfile);
patientRoutes.route('/getInformation').post(getInformation);
patientRoutes.route('/appoinment').post(takeAppoinment);
patientRoutes.route('/appoinment').post(getAppoinment);
patientRoutes.route('/cancelAppoinment').post(cancelAppoinment);


module.exports = patientRoutes;
