const mongoose = require('mongoose');
const Appointment = require('./appointment');

const patientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    disease: { type: Schema.Types.ObjectId, ref: 'Disease' }
});

patientSchema.methods.getAppointments = async function () {
    const appointments = await Appointment.find({ patient: this.user._id });
    return appointments;
}

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;