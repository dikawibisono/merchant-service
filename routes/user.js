const express = require('express');
const bodyParser = require('body-parser');
const {addUser, deleteUser} = require('../controller/user');
const router = express.Router();
router.use(bodyParser.json());

router.post('/', addUser)

router.delete('/:id', deleteUser)

module.exports = router;