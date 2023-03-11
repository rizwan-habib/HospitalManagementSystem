const express = require('express');
let cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');


// Connect to MongoDB
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to')
    })
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
    res.send('Welcome to Server!');
});
var server = app.listen(config.app.port, function () {
    console.log('app listening at http://localhost:4000');
}); 