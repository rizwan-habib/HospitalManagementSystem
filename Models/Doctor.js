const mongoose = require('mongoose');
const Appointment = require('./appointment');

const doctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialty: { type: String, required: true },
    diseases: [{ type: Schema.Types.ObjectId, ref: 'Disease' }]
});

doctorSchema.methods.getPendingAppointments = async function () {
    const appointments = await Appointment.find({ doctor: this.user._id, status: 'pending' });
    return appointments;
}

doctorSchema.methods.getPatientAppointments = async function (patientId) {
    const appointments = await Appointment.find({ doctor: this.user._id, patient: patientId });
    return appointments;
}

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;