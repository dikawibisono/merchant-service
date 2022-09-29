const express = require('express');
const bodyParser = require('body-parser');
const {showUser, addUser, deleteUser} = require('../controller/user');
const router = express.Router();
router.use(bodyParser.json());

router.get('/', showUser)

router.post('/', addUser)

router.delete('/:id', deleteUser)

module.exports = router;