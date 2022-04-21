const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    order_id: String,
    userId:{
        type: ObjectId,
        ref: "User"
    },

    productId: {
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: true
    },

   // date: Date,
   
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 


