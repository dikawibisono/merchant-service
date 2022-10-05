var auth = require('basic-auth')
const dotenv = require('dotenv');
dotenv.config({debug: true});

// variabel authenticated user

const username = process.env.userName_basicAuth
const password = process.env.password_basicAuth

const login = (req, res) => {

    let user = auth(req)

    if (user === undefined) {
    return res.status(401).json({message: 'not authorized!'})
    }

    if (user.name != username || user.pass != password) {
    return res.status(401).json({message: 'username & password unauthorized!'})
    }

    res.status(200).json({message: `welcome ${user.name}`})
}

module.exports = login