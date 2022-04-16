const AuthorModel= require("../models/newAuthor")
const PublisherModel= require("../models/newPublisher")
const BookModel= require("../models/bookmodel")

const createAuthor= async function (req, res) {
    let data= req.body
    let authorData= await AuthorModel.create(data)
    res.send({msg: authorData})
}

const createPublisher= async function (req, res) {
    let data= req.body
    let publisherData= await PublisherModel.create(data)
    res.send({msg: publisherData})
}

const getBookdata= async function (req, res) {
    let books= await BookModel.find().populate('author_id', publisher_id)
    res.send({msg: books})
}

const getBooksInYear = async function (req, res){
    let yearData =req.body.year
    let bookYear = await BookModel.find({year:yearData})
    res.send({msg : bookYear})
}

const getParticularBooks = async function (req, res){
    let condition= req.body
    let particularBook = await BookModel.find({condition})
    res.send({msg : particularBook})
}

const getINRBooks = async function (req, res){
    let bookPrice = await BookModel.find({
        'prices.indianPrice': { $in : [100, 200, 500] }
    })
    res.send({msg : bookPrice})
}


const getRandomBooks= async function (req, res) {
    let allUsers= await BookModel.find({
        $or: [{stockAvailable: true}, {totalPages: { $gt: 500}}]
    })
    res.send({msg: allUsers})
}

module.exports. createAuthor=  createAuthor;
module.exports.createPublisher= createPublisher;
module.exports.getBookdata= getBookdata;
module.exports.getParticularBooks= getParticularBooks;
module.exports.getINRBooks= getINRBooks;
module.exports.getRandomBooks= getRandomBooks;