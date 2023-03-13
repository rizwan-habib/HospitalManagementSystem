const PatientService = require('../services/patient.service')

const takeAppoinment = async (req, res) => {
    const doctorId = req.body.doctorId;
    const date = req.body.date;
    const currentUser = req.body.userID;
    const diseaseId = req.body.diseaseID;

    try {
        const appoinment = await PatientService.takeAppoinment(doctorId, date, currentUser, diseaseId);
        if (appoinment) {
            res.status(200).json("success")
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getDoctors = async (req, res) => {
    const disease = req.body.disease;
    try {
        const result = await PatientService.getDoctorsonDisease(disease);

        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const cancelAppoinment = async (req, res) => {
    const appoinmentId = req.body.appoinmentId;

    try {
        const appoinment = await PatientService.cancelAppoinment(appoinmentId);
        if (appoinment) {
            res.status(200).json("success")
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const getAppoinment = async (req, res) => {
    const currentUser = req.body.currentUser;

    try {
        const appoinment = await PatientService.getAppoinment(currentUser);
        if (appoinment) {
            res.status(200).json(appoinment)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const setUpProfile = async (req, res) => {
    const userId = req.body.userId;
    const diseaseId = req.body.diseaseID;

    try {
        const patient = await PatientService.setUpProfile(userId, diseaseId);
        if (patient) {
            res.status(200).json("success")
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    takeAppoinment,
    getDoctors,
    cancelAppoinment,
    getAppoinment,
    setUpProfile
}
