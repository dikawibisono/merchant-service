const db = require('../model/dbMerchantService');

//add product
const addProduct = (req, res) => {
    const {name, quantity, price} = req.body;

    const sqlQuery = "INSERT INTO product (name, quantity, price) VALUES (?, ?, ?)";
    db.query(sqlQuery, [name, quantity, price], (err, result) => {
        if(err) throw err;
        res.status(200).send('Product added successfully')
    })

}

//delete product
const deleteProduct = (req, res) => {
    const id = req.params.id
    const sqlQuery = "DELETE FROM product WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).send(`Product with id ${id} has been deleted`)
    })
    
}


//update product
const updateProduct = (req, res) => {
    const id = req.params.id
    const {name, quantity, price} = req.body;
    const sqlQuery = `UPDATE product SET name = ?, quantity = ?, price = ? WHERE id = ?` 
    db.query(sqlQuery, [name, quantity, price, id], (err, result)=>{
        if(err) throw err;
        res.status(200).send(`Product with id ${id} has been updated`)
    })

}

//get list of products
const getProduct = (req, res) => {
    db.query("SELECT * FROM product", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}





module.exports = {addProduct, deleteProduct, updateProduct, getProduct}