const BatchModel = require("../models/batchModel")

const createBatch = async function(req, res) {
    let data= req.body
    let batchData= await BatchModel.create(data)
    res.send({msg: batchData})
}











module.exports.createBatch= createBatch;