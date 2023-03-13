const express = require('express');
const doctorRoutes = express.Router();
const { getAppoinment, changeStatusAppoinment, getAppoinmentofPatient, setUpProfile } = require('../controllers/doctor.controller');


doctorRoutes.route('/setUpProfile').post(setUpProfile);
doctorRoutes.route('/getAppoinments').get(getAppoinment);
doctorRoutes.route('/changeStatusAppoinment').post(changeStatusAppoinment);
doctorRoutes.route('/appoinment').get(getAppoinmentofPatient);


module.exports = doctorRoutes;
