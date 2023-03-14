const express = require('express');

const userModel = require('../model/User');


// Get Information of User
const getInformation = async (userId = '') => {
    try {
        const user = await userModel.findById(userId );

        if (user) {
            return (user);
        }
    } catch (error) {
        return { message: error.message };
    }
};
module.exports = {
    
    getInformation
}
