const express = require('express');
const bodyParser = require('body-parser');
const {showUser, addUser, deleteUser} = require('../controller/user');
const router = express.Router();
const verifytoken = require('../controller/verifytoken')

router.use(bodyParser.json());

router.get('/', showUser)

router.post('/', addUser)

router.delete('/:id',verifytoken, deleteUser)

module.exports = router;