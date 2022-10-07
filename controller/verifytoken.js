const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('Bearer-token');

    if (!token) {return res.status(401).json({message: "Access Denied"})}

    try{
        const verify = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verify
        next()
    } catch (error){
        res.status(400).json({message: "Invalid token"})
    }

}

module.exports = auth