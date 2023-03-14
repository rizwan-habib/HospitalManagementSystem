const express = require('express');
const secretaryRoutes = express.Router();
const { getDoctors, getPatients, getAppoinments, deletePatient, deleteDoctor, updateDoctor, updatePatient, getInformation } = require('../controllers/secretary.controller');


//get all patients
secretaryRoutes.route('/patients').get(getPatients);

//get all doctors
secretaryRoutes.route('/doctors').post(getDoctors);

//get all appointments
secretaryRoutes.route('/appoinment').post(getAppoinments);
secretaryRoutes.route('/getInformation').post(getInformation);

//delete patient
secretaryRoutes.route('/patients').delete(deletePatient);

//delete doctor
secretaryRoutes.route('/doctors').delete(deleteDoctor);

//update doctor
secretaryRoutes.route('/doctors').put(updateDoctor);

//update patient
secretaryRoutes.route('/patients').put(updatePatient);



module.exports = secretaryRoutes;
