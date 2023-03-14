const express = require('express');

const appoinmentModel = require('../model/Appoinment');


// Get Information of User
const getInformation = async (appoinmentId = '') => {
    try {
        const appoinment = await appoinmentModel.findById( appoinmentId );
        if (appoinment) {
            return (appoinment);
        }
    } catch (error) {
        return { message: error.message };
    }
};
module.exports = {
    
    getInformation
}
