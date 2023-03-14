const appoinmentService = require('../services/appoinment.service')



const getInformation = async (req, res) => {
    const appoinmentId = req.body.appoinmentId;

    try {
        const appoinment = await appoinmentService.getInformation(appoinmentId);
        if (appoinment) {
            res.status(200).json(appoinmentId)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
module.exports = {
    getInformation
}
