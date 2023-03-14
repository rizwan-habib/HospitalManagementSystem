const userService = require('../services/user.service')



const getInformation = async (req, res) => {
    const userId = req.body.userId;

    try {
        const user = await userService.getInformation(userId);
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).json({ message })
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
module.exports = {
    getInformation
}
