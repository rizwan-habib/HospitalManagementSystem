const express = require('express');

const diseaseModel = require('../model/Disease');


// Get Information of User
const getInformation = async (diseaseId = '') => {
    try {
        const disease = await diseaseModel.findById(diseaseId );

        if (disease) {
            return (disease);
        }
    } catch (error) {
        return { message: error.message };
    }
};
// Get Information of User
const getDiseases = async () => {
    try {
        const diseases = await diseaseModel.find();

        if (diseases) {
            return (diseases);
        }
    } catch (error) {
        return { message: error.message };
    }
};

module.exports = {
    getDiseases,
    getInformation
}
