const diseaseService = require('../services/disease.service')


const getDiseases = async (req, res) => {
    
    try {
        const diseases = await diseaseService.getDiseases();
        if (diseases) {
            res.status(200).json(diseases)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const getInformation = async (req, res) => {
    const diseaseId = req.body.diseaseId;

    try {
        const disease = await diseaseService.getInformation(diseaseId);
        if (disease) {
            res.status(200).json(disease)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
module.exports = {
    getInformation,
    getDiseases
}
