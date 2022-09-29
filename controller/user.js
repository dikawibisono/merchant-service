const express = require('express');
const db = require('../model/dbMerchantService');


//get user of merchant service
const showUser = (req, res) => {
    db.query("SELECT * FROM merchant_table", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

//add user for merchant service
const addUser = (req, res) => {
    const {password_merchant, name_merchant, address_merchant,phone_number } = req.body;
    
    const sqlQuery = "INSERT INTO merchant_table (password_merchant, name_merchant, address_merchant, phone_number) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [password_merchant, name_merchant, address_merchant, phone_number], (err, result) => {
        if(err) throw err;
        res.status(200).send('Merchant user added successfully')
    })
}

//user can delete account by id
const deleteUser = (req, res) => {
    const id = req.params.id
    const sqlQuery = "DELETE FROM merchant_table WHERE id_merchant = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).send(`User dengan id ${id} telah dihapus`)
    })
}


module.exports = {showUser, addUser, deleteUser}