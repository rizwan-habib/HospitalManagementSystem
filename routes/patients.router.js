const express = require('express');
const patientRoutes = express.Router();
const { takeAppoinment, getDoctors, cancelAppoinment, getAppoinment, setUpProfile } = require('../controllers/patient.controller');


patientRoutes.route('/getDoctors').get(getDoctors);
patientRoutes.route('/setUpProfile').post(setUpProfile);
patientRoutes.route('/appoinment').post(takeAppoinment);
patientRoutes.route('/appoinment').get(getAppoinment);
patientRoutes.route('/cancelAppoinment').post(cancelAppoinment);


module.exports = patientRoutes;
