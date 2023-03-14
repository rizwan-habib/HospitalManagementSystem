const express = require('express');
const doctorRoutes = express.Router();
const { getAppoinment, changeStatusAppoinment, getAppoinmentofPatient, setUpProfile, getInformation } = require('../controllers/doctor.controller');


doctorRoutes.route('/setUpProfile').post(setUpProfile);
doctorRoutes.route('/getInformation').post(getInformation);
doctorRoutes.route('/getAppoinments').post(getAppoinment);
doctorRoutes.route('/changeStatusAppoinment').post(changeStatusAppoinment);
doctorRoutes.route('/appoinment').post(getAppoinmentofPatient);


module.exports = doctorRoutes;
