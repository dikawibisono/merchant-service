var auth = require('basic-auth')
const dotenv = require('dotenv');
dotenv.config({debug: true});

const jwt = require('jsonwebtoken');

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

    const token = jwt.sign({_username: username, _password: password}, process.env.SECRET_TOKEN)

    res.status(200).header('Bearer-token', token).json({message: `welcome ${user.name}`})
}

module.exports = login