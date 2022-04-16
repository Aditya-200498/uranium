const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    prices: {
        indianPrice: Number,
        europePrice: Number
    },
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    authurName: String,
    totalPages: Number,
    stockAvailable: Boolean
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 


