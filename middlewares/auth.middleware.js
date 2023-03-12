const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretKey);
        req.user = { id: decoded.id, role: decoded.role };
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

module.exports = { authenticate };
