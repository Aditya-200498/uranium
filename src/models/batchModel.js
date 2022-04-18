const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const batchSchema = new mongoose.Schema( {
    batch_id: String,
    name: String,
    size: Number,
    
    //price: Number,
   // ratings: Number,
    program: {
       // type: String,
        enum: ["backend", "frontend"] 
    }
        
   
}, { timestamps: true });

module.exports = mongoose.model('Batch', batchSchema) 


