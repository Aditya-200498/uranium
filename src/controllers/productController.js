const ProductModel = require("../models/productSchema")

const createProduct = async function(req, res) {
    let data= req.body
    let productData= await ProductModel.create(data)
    res.send({msg: productData})
}


module.exports.createProduct= createProduct;