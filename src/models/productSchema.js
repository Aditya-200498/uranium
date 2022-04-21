const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const productSchema = new mongoose.Schema( {
    productId: String,
    name: {
        type: String,
        required: true
    },
    catagory: String,
    price: {
        type: Number,
        required: true
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)