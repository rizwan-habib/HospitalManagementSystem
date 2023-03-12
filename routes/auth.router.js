const express = require('express');
const authRoutes = express.Router();
const {signUp , login} = require('../controllers/auth.controller');


authRoutes.route('/sign-up').post(signUp);
authRoutes.route('/login').post(login)


module.exports = authRoutes;
