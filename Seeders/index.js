const mongoose = require('mongoose');
const faker = require('faker');
const Patient = require('./models/Patient');
const Doctor = require('./models/Doctor');
const Secretary = require('./models/Secretary');
const Admin = require('./models/Admin');

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// Generate fake data for patients
const patients = [];
for (let i = 0; i < 10; i++) {
  const patient = new Patient({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    diseases: [faker.lorem.word(), faker.lorem.word()]
  });
  patients.push(patient);
}

// Generate fake data for doctors
const doctors = [];
for (let i = 0; i < 5; i++) {
  const doctor = new Doctor({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    specialties: [faker.lorem.word(), faker.lorem.word()]
  });
  doctors.push(doctor);
}

// Generate fake data for secretaries
const secretaries = [];
for (let i = 0; i < 2; i++) {
  const secretary = new Secretary({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  });
  secretaries.push(secretary);
}

// Save the generated data to the database
Promise.all([
  Patient.insertMany(patients),
  Doctor.insertMany(doctors),
  Secretary.insertMany(secretaries),
  Admin.insertMany(admins)
]).then(() => {
  console.log('Seed data inserted successfully');
  mongoose.connection.close();
}).catch((err) => {
  console.error(err);
});
