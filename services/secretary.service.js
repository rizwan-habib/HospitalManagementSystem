const express = require('express');
const doctorModel = require('../model/Doctor');
const patientModel = require('../model/Patient');
const appoinmentModel = require('../model/Appoinment');
const secretaryModel = require('../model/Secretary');


// get patients
const getPatients = async () => {
    try {
        const patients = await patientModel.find();
        if (patients) {
            return (patients);
        }
    } catch (error) {
        return { message: error.message };
    }
};

// get appoinments
const getAppoinments = async () => {
    try {
        const appoinments = await appoinmentModel.find();
        if (appoinments) {
            return (appoinments);
        }
    } catch (error) {
        return { message: error.message };
    }
};
// get doctors
const getDoctors = async () => {
    try {
        const doctors = await doctorModel.find();
        if (doctors) {
            return (doctors);
        }
    } catch (error) {
        return { message: error.message };
    }
};
// delete patient
const deletePatient = async (patientId = '') => {
    try {
        const patient = await patientModel.findByIdAndDelete(patientId);
        if (patient) {
            return (patient);
        }
    } catch (error) {
        return { message: error.message };
    }
};

// delete doctor
const deleteDoctor = async (doctorId = '') => {
    try {
        const doctor = await doctorModel.findByIdAndDelete(doctorId);
        if (doctor) {
            return (doctor);
        }
    } catch (error) {
        return { message: error.message };
    }
};
// update doctor
const updateDoctor = async (doctorId = '', diseasesID = '', speciality = '') => {
    try {
        const doctor = await doctorModel.findByIdAndUpdate(
            doctorId,
            {
                user: doctorId,
                specialty: speciality,
                diseases: diseasesID
            },
            { new: true } // Return the updated patient instead of the old one
        );
        // const doctor = await doctorModel.findByIdAndDelete(doctorId);
        if (doctor) {
            return (doctor);
        }
    } catch (error) {
        return { message: error.message };
    }
};

// update patient
const updatePatient = async (patientId = '', diseaseId = '') => {
    try {
        const patient = await patientModel.findByIdAndUpdate(
            patientId,
            {
                user: patientId,
                disease: diseaseId
            },
            { new: true } // Return the updated patient instead of the old one
        );
        // const doctor = await doctorModel.findByIdAndDelete(doctorId);
        if (patient) {
            return (patient);
        }
    } catch (error) {
        return { message: error.message };
    }
};
// Get Information of Secretary
const getInformation = async (secretaryId = '') => {
    try {
        const secretary = await secretaryModel.find({ user: secretaryId });

        if (secretary) {
            return (secretary);
        }
    } catch (error) {
        return { message: error.message };
    }
};
module.exports = {
    getInformation,
    getDoctors,
    getPatients,
    getAppoinments,
    deletePatient,
    deleteDoctor,
    updateDoctor,
    updatePatient
}
