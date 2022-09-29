const express = require('express');
const userMerchant = require('./routes/user');

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to merchant service')
})

app.use('/user', userMerchant)

app.listen(PORT, () => {
    console.log(`Listenin on port ${PORT}`)
})