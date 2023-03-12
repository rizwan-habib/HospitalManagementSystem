const AuthService = require('../services/auth.service');

const signUp = async (req, res) => {
    const {name = '', email = '', password = '', role = ''} = req.body || {};
    try {
        const {user = '', token = '', message = ''} = await AuthService.singUp(name, email, password, role);
        if (user && token) {
            res.status(200).json({user, token})
        } else {
            res.status(400).json({message})
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}


const login = async (req, res) => {
    const {email = '', password = ''} = req.body || {};
    try {
        const {user = '', token = '', message = ''} = await AuthService.login(email, password);
        if (user && token) {
            res.status(200).json({user, token})
        } else {
            res.status(400).json({user, token});
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}


module.exports = {
    signUp,
    login
}
