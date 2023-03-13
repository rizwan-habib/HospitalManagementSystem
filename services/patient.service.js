const express = require('express');
const doctorModel = require('../model/Doctor');
const appoinmentModel = require('../model/Appoinment');
const patientModel = require('../model/Patient');

const getDoctorsonDisease = async (disease) => {
    try {
        // Get doctors on the basis on disease
        const result = await doctorModel.find({ diseases: disease });
        if (result) {
            return (result);
        }
    } catch (error) {
        return { message: error.message };
    }
};

// Take Appoinment
const takeAppoinment = async (doctorId = '', date1 = '', currentUser = '', diseaseId = '') => {
    try {

        const appoinment = await appoinmentModel.create({
            patient: currentUser,
            doctor: doctorId,
            date: date1,
            status: "pending",
            disease: diseaseId
        });
        appoinment.save();
        if (appoinment) {
            return (appoinment);
        }
    } catch (error) {
        return { message: error.message };
    }
};
// Setup Profile
const setUpProfile = async (patientId = '', diseaseId = '') => {
    try {

        const patient = await patientModel.create({
            user: patientId,
            disease: diseaseId
        });
        patient.save();
        if (patient) {
            return (patient);
        }
    } catch (error) {
        return { message: error.message };
    }
};

// Cancel Appoinment
const cancelAppoinment = async (appoinmentId = '') => {
    try {
        const appoinment = await appoinmentModel.findByIdAndUpdate(
            appoinmentId,
            { $set: { status: "cancelled" } },
            { new: true }
        );
        if (appoinment) {
            return (appoinment);
        }
    } catch (error) {
        return { message: error.message };
    }
};

// Get Appoinment
const getAppoinment = async (currentUser = '') => {
    try {
        const appoinment = await appoinmentModel.find({ patient: currentUser });

        if (appoinment) {
            return (appoinment);
        }
    } catch (error) {
        return { message: error.message };
    }
};

module.exports = {
    getDoctorsonDisease,
    takeAppoinment,
    cancelAppoinment,
    getAppoinment,
    setUpProfile
}
