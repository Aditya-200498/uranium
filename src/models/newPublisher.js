const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const publisherSchema = new mongoose.Schema( {
    publisher_id: String,
    name: {
        type: String,
        required: true
    },
    headQuater: String
    
}, { timestamps: true });

module.exports = mongoose.model('Publisher', publisherSchema)