const DeveloperModel= require("../models/developerModel")

let createDeveloper= async function(req, res) {
    let data= req.body
    let developerData= await DeveloperModel.create(data)
    res.send({msg: developerData})
}

const getDevelopers= async function (req, res) {
    let developer= await DeveloperModel.find().populate('batch_id')
    res.send({msg: developer})
}

const getFemaleDeveloper= async function (req, res) {
    let developer= await DeveloperModel.find({percentage: {$gte: 70}, "gender":"female"}).populate('batch_id')
    res.send({msg: developer})

}

const programAndPercentage= async function (req, res) {
    let percent= req.query.percentage
    let programData= req.query.program
    const specdificDeveloper= await DeveloperModel.find({percentage: percent, "program": programData}).populate("batch_id")
    res.send({msg: specdificDeveloper})

}

module.exports.createDeveloper= createDeveloper;
module.exports.getDevelopers= getDevelopers;
module.exports.getFemaleDeveloper= getFemaleDeveloper;
module.exports.programAndPercentage= programAndPercentage;