const DoctorService = require('../services/doctor.service')
const changeStatusAppoinment = async (req, res) => {
    const appoinmentId = req.body.appoinmentId;
    const newStatus = req.body.newStatus
    try {
        const appoinment = await DoctorService.changeStatusAppoinment(appoinmentId, newStatus);
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
        const appoinment = await DoctorService.getAppoinment(currentUser);
        if (appoinment) {
            res.status(200).json(appoinment)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const getAppoinmentofPatient = async (req, res) => {
    const patientId = req.body.patientId;

    try {
        const appoinment = await DoctorService.getAppoinmentofPatient(patientId);
        if (appoinment) {
            res.status(200).json(appoinment)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
module.exports = {
    changeStatusAppoinment,
    getAppoinment,
    getAppoinmentofPatient
}
