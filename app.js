const express = require("express");
let cors = require("cors");
const mongoose = require("mongoose");
const env_config = require("./config");
const authRoutes = require('./routes/auth.router');
const patientRoutes = require('./routes/patients.router');
const doctorRoutes=require('./routes/doctors.router')
const secretaryRoutes=require('./routes/secretary.router')
const morgan = require("morgan");
// Connect to MongoDB
mongoose.connect(env_config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to");
  });
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/auth' , authRoutes)
app.use('/patient' , patientRoutes)
app.use('/doctor' , doctorRoutes)
app.use('/secretary' , secretaryRoutes)


app.listen(env_config.app.port, function () {
  console.log("app listening at http://localhost:4000");
});
