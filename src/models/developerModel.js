const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {
    developer_id: {
        type: String
        
    }, 
      name: {
        type: String,
        required: true
    },

    gender:{
        
        enum: ["male", "female"]
    },
    percentage: Number,
    batch_id: {
        type: ObjectId,
        ref: "Batch"
    }
    
    
}, { timestamps: true });

module.exports = mongoose.model('Author', developerSchema) 