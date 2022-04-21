const UserModel= require("../models/userModel")
const ProductModel= require("../models/productSchema")
const OrderModel= require("../models/orderSchema")

const createNewOrder= async function (req, res)  {
    let freeUser= req.isFreeUser
    let userId= req.body.user_id
    let productId= req.body.user_id

    if (!userId && !productId)
    return res.send({msg: "User_id and product_id is required"})

    if(!userId)  
    
    return res.send({msg: "User_id is required"}) 

    if(!productId)
    return res.send({msg: "Product_id is required"}) 

     

    let userbalance = await UserModel.findOne ({_id: req.body.user_id}).select('balance')
    let productPrice = await ProductModel.findOne({_id: req.body.product_id}).select('price')
    if (!freeUser && userbalance.balance >= productPrice.price) {
        let newBalance = userbalance.balance - productPrice.price 
        let orderData= await OrderModel.create({
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            amount: productPrice.price,
            isFreeAppUser: false
        })
        

        await userbalance.findOneAndUpdate({_id: req.body.user_id}, {balance:newBalance})
        res.send({msg: orderData})
    }
    if (!freeUser && userbalance.balance < productPrice.price) 
    return res.send({msg: "insufficient balance"})

    if (freeUser) {
        let orderData = await order.create({
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            amount: 0,
            isFreeAppUser: true
        })
        res.send({msg: orderData})
    }
}


module.exports.createNewOrder= createNewOrder;