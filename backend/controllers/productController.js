const Product = require("../models/productModels");

//Create new Product
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product,
    })
}

exports.getAllProducts = (req,res) => {

    res.status(200).json({message : "Working fine"});
}