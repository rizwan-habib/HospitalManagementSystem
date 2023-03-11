require('dotenv').config();

const config = {
    development: {
        app: {
            port: parseInt(process.env.PORT) || 4000,
        },
        db: {
            url: process.env.DEV_DB_URL || 'mongodb+srv://rizwanjanjua:1234@cluster0.znpdo1g.mongodb.net/?retryWrites=true&w=majority',
        },
    }
}

module.exports = config['development'];