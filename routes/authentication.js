const express = require('express');
const login = require('../controller/authentication');

const router = express.Router();

router.post('/', login)

module.exports = router;