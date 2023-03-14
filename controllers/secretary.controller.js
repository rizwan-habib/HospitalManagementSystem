const SecreataryService = require('../services/secretary.service')


const getPatients = async (req, res) => {

    try {
        const patients = await SecreataryService.getPatients();
        if (patients) {
            res.status(200).json(patients)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const getAppoinments = async (req, res) => {

    try {
        const appoinments = await SecreataryService.getAppoinments();
        if (appoinments) {
            res.status(200).json(appoinments)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getDoctors = async (req, res) => {

    try {
        const doctors = await SecreataryService.getDoctors();
        if (doctors) {
            res.status(200).json(doctors)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deletePatient = async (req, res) => {
    const patientId = req.body.patientId;
    try {
        const patient = await SecreataryService.deletePatient(patientId);
        if (patient) {
            res.status(200).json("success")
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const deleteDoctor = async (req, res) => {
    const doctorId = req.body.doctorId;
    try {
        const doctor = await SecreataryService.deleteDoctor(doctorId);
        if (doctor) {
            res.status(200).json("success")
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const updateDoctor = async (req, res) => {
    const doctorId = req.body.doctorId;
    const diseasesId = req.body.diseasesID;
    const speciality = req.body.speciality;
    try {
        const doctor = await SecreataryService.updateDoctor(doctorId, diseasesId, speciality);
        if (doctor) {
            res.status(200).json("success")
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const updatePatient = async (req, res) => {
    const patientId = req.body.patientId;
    const diseaseId = req.body.diseaseID;
    try {
        const patient = await SecreataryService.updatePatient(patientId, diseaseId);
        if (patient) {
            res.status(200).json("success")
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const getInformation = async (req, res) => {
    const secretaryId = req.body.secretaryId;

    try {
        const secretary = await SecreataryService.getInformation(secretaryId);
        if (secretary) {
            res.status(200).json(secretary)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
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
