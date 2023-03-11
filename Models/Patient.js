const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const patientSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    disease: { type: String, ref: 'Disease' }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
