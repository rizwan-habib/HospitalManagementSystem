const express = require('express');
const doctorModel = require('../model/Doctor');
const appoinmentModel = require('../model/Appoinment');

// Change status of Appoinment
const changeStatusAppoinment = async (appoinmentId = '', newStatus = '') => {
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
// Setup Profile
const setUpProfile = async (doctorId = '', diseasesId = '', speciality = '') => {
    try {

        const doctor = await doctorModel.create({
            user: doctorId,
            specialty:speciality,
            diseases: diseasesId
        });
        doctor.save();
        if (doctor) {
            return (doctor);
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
// Get Information of Doctor
const getInformation = async (doctorId = '') => {
    try {
        const doctor = await doctorModel.find({ user: doctorId });

        if (doctor) {
            return (doctor);
        }
    } catch (error) {
        return { message: error.message };
    }
};

module.exports = {
    changeStatusAppoinment,
    getAppoinment,
    getAppoinmentofPatient,
    setUpProfile,
    getInformation
}
