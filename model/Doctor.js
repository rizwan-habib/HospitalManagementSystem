const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const doctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialty: {type: String, required: true},
    diseases: [{type: String, ref: 'Disease'}]
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
