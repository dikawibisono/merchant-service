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

    //validation
    if (password_merchant == undefined){return res.status(400).send('Please input data completely')}
    if (name_merchant == undefined){return res.status(400).send('Please input data completely')}
    if (address_merchant == undefined){return res.status(400).send('Please input data completely')}
    if (phone_number == undefined){return res.status(400).send('Please input data completely')}

    if(password_merchant.length < 6){return res.status(400).send('Password_merchant must be at least 6 characters')}
    if(name_merchant.length <= 3 || name_merchant.length >= 50 ){return res.status(400).send('name_merchant must be at least 3 characters and not more than 50 characters')}
    if(isNaN(phone_number)){return res.status(400).send('phone_number must be a number')}

    const sqlQuery = "INSERT INTO merchant_table (password_merchant, name_merchant, address_merchant, phone_number) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [password_merchant, name_merchant, address_merchant, phone_number], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Merchant user added successfully'})
    })
}

//user can delete account by id
const deleteUser = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    
    const sqlQuery = "DELETE FROM merchant_table WHERE id_merchant = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `User with id ${id} has been deleted`});
    })
}


module.exports = {showUser, addUser, deleteUser}