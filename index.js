const express = require('express');
const userMerchant = require('./routes/user');
const productsMerchant = require('./routes/product');
const login = require('./routes/authentication');

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to merchant service')
})

app.use('/login', login)

app.use('/user', userMerchant)

app.use('/product', productsMerchant)

app.listen(PORT, () => {
    console.log(`Listenin on port ${PORT}`)
})