const express = require('express');
const doctorModel = require('../model/Doctor');
const appoinmentModel = require('../model/Appoinment');

// Change status of Appoinment
const changeStatusAppoinment = async (appoinmentId = '',newStatus='') => {
    try {
        const appoinment = await appoinmentModel.findByIdAndUpdate(
            appoinmentId,
            { $set: { status: newStatus } },
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
        const appoinment = await appoinmentModel.find({ doctor: currentUser });

        if (appoinment) {
            return (appoinment);
        }
    } catch (error) {
        return { message: error.message };
    }
};
// Get Appoinment of Patient
const getAppoinmentofPatient = async (patientId = '') => {
    try {
        const appoinment = await appoinmentModel.find({ patient: patientId });

        if (appoinment) {
            return (appoinment);
        }
    } catch (error) {
        return { message: error.message };
    }
};

module.exports = {
    changeStatusAppoinment,
    getAppoinment,
    getAppoinmentofPatient
}
