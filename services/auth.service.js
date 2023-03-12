const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/User');

const secretKey = process.env.SECRET_KEY;
const singUp = async (name, email, password, role) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user with the hashed password
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        // Generate a JWT token for the new user
        if (user) {
            const token = jwt.sign({id: user._id, role: user.role}, secretKey);
            return ({user, token});
        }
    } catch (error) {
        return {message: error.message};
    }
};

// Login API
const login = async (email = '', password = '') => {
    try {
        // Find the user by email
        const user = await User.findOne({email});
        // Compare the password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid login credentials');
        }
        // Generate a JWT token for the authenticated user
        if (!user) {
            throw new Error('No user found');
        } else {
            const token = jwt.sign({id: user._id, role: user.role}, secretKey);
            return {user, token};
        }
    } catch (error) {
        return {message: error.message};
    }
};

// Middleware to authenticate user with JWT token

module.exports = {
    singUp, login
}
