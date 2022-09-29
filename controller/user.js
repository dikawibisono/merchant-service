const express = require('express');
// const bodyParser = require('body-parser');
const db = require('../model/dbMerchantService');

const router = express.Router();

// router.use(bodyParser.json());

const addUser = (req, res) => {
    const {password_merchant, name_merchant, address_merchant,phone_number } = req.body;
    
    const sqlQuery = "INSERT INTO merchant_table (password_merchant, name_merchant, address_merchant, phone_number) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [password_merchant, name_merchant, address_merchant, phone_number], (err, result) => {
        if(err){
            console.log(err)
            res.send("error nih")
        } else {
            res.send('User Berhasil ditambahkan')
            console.log(result);
        }
    })
}

const deleteUser = (req, res) => {
    console.log(req.params.id)
    res.send("User terdelete")

}


module.exports = {addUser, deleteUser}