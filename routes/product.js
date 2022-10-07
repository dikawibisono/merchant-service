const express = require('express');
const bodyParser = require('body-parser');
const {addProduct, deleteProduct, updateProduct, getProduct} = require('../controller/product')
const router = express.Router();
const verifytoken = require('../controller/verifytoken')

router.use(bodyParser.json());

router.post('/',verifytoken, addProduct)

router.delete('/:id',verifytoken, deleteProduct)

router.put('/:id',verifytoken, updateProduct)

router.get('/',verifytoken, getProduct)

module.exports = router;