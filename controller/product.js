const db = require('../model/dbMerchantService');

//add product
const addProduct = (req, res) => {
    const {name, quantity, price} = req.body;

    let validator = validation(name, quantity, price)

    if (validator == 'data not complete'){
        return res.status(400).json({message: 'Please input data completely'})}
    if (validator == 'name bad request'){
        return res.status(400).json({message: 'name product must be at least 3 characters and not more than 50 characters'})}
    if (validator == 'quantity bad request'){
        return res.status(400).json({message: 'quantity must be a number and minimum stock is 1'})}
    if (validator == 'price bad request'){
        return res.status(400).json({message: 'price must be a number and minimum price is 10000'})}
   
    const sqlQuery = "INSERT INTO product (name, quantity, price) VALUES (?, ?, ?)";
    db.query(sqlQuery, [name, quantity, price], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Product added successfully'})
    })

}

//delete product
const deleteProduct = (req, res) => {
    const id = req.params.id
    const sqlQuery = "DELETE FROM product WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Product with id ${id} has been deleted`})
    })
    
}


//update product
const updateProduct = (req, res) => {
    const id = req.params.id
    const {name, quantity, price} = req.body;
    let validator = validation(name, quantity, price)

    if (validator == 'data not complete'){
        return res.status(400).json({message: 'Please input data completely'})}
    if (validator == 'name bad request'){
        return res.status(400).json({message: 'name product must be at least 3 characters and not more than 50 characters'})}
    if (validator == 'quantity bad request'){
        return res.status(400).json({message: 'quantity must be a number and minimum stock is 1'})}
    if (validator == 'price bad request'){
        return res.status(400).json({message: 'price must be a number and minimum price is 10000'})}
   
    const sqlQuery = `UPDATE product SET name = ?, quantity = ?, price = ? WHERE id = ?` 
    db.query(sqlQuery, [name, quantity, price, id], (err, result)=>{
        if(err) throw err;
        res.status(200).json({message: `Product with id ${id} has been updated`})
    })

}

//get list of products
const getProduct = (req, res) => {
    db.query("SELECT * FROM product", (err, result) => {
        if(err) throw err;
        res.status(200).json(result)
    })
}


function validation(name, quantity, price){
    if (name == undefined) {return 'data not complete'}
    if (quantity == undefined) {return 'data not complete'}
    if (price == undefined) {return 'data not complete'}

    if (name.length <= 3 || name.length >= 50 ){return 'name bad request'}
    if (isNaN(quantity) || quantity <= 1){return 'quantity bad request'}
    if (isNaN(price) || price <= 10000){return 'price bad request'}
}




module.exports = {addProduct, deleteProduct, updateProduct, getProduct}