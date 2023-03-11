const mongoose = require('mongoose');

const secretarySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }
});


const Secretary = mongoose.model('Secretary', secretarySchema);

module.exports = Secretary;