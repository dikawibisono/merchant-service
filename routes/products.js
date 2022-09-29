const express = require('express');
const bodyParser = require('body-parser');
const {addProduct, deleteProduct, updateProduct, getProduct} = require('../controller/products')
const router = express.Router();

router.use(bodyParser.json());

router.post('/', addProduct)

router.delete('/:id', deleteProduct)

router.put('/:id', updateProduct)

router.get('/', getProduct)

module.exports = router;