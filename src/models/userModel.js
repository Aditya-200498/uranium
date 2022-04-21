const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const userSchema = new mongoose.Schema( {
    userId: String,
      name: {
        type: String,
        required: true
    },
    balance: Number,
    address: String,
    age: Number,

    gender:{
        type: String,
        
        enum: ["male", "female", "other"]
    },
    
    isFreeAppUser: {
        type: Boolean,
        default: false,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) 