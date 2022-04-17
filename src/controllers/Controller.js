const AuthorModel= require("../models/newAuthor")
const PublisherModel= require("../models/newPublisher")
const BookModel= require("../models/bookmodel")
const res = require("express/lib/response")
//const newAuthor = require("../modelss/newAuthor")

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

const createBook= async function (req, res) {
    let data= req.body
    let bookData= await BookModel.create(data)
    res.send({msg: bookData})
}
const createBookDetails= async function (req, res) {
    let reqBook= req.body.author_id
    let reqPub= req.body.publisher_id
    if (reqBook) {
        if (reqPub) {
            let authData= await AuthorModel.find({_id:reqBook})
            let pubData= await PublisherModel.find({_id:reqPub})
            if (authData.length!==0) {
                let save= await BookModel.create(req.body)
                res.send({msg: save})
            } else res.send({msg: "send valid publisher"})
        } res.send({msg: "send valid author"})
    } res.send({msg: "author id is required"})
res.send({msg: "author id is needed"})
} 

const getBookdata= async function (req, res) {
    let books= await BookModel.find().populate('author_id').populate('publisher_id')
    res.send({msg: books})
}

const updateData = async function (req, res){
    let system = await PublisherModel.find({$or:[{name:"Penguin"}, {name:"HarperCollins"}]}).select({_id:1})
    let newSet = await BookModel.updateMany({$or:[{publisher:system[0]}, {publisher:system[1]}]},{$set:{hardcover:true},new:true})
    res.send({msg : newSet})
}

const updatePrice = async function (req, res){
    let data= await PublisherModel.find({rating:{$gt:3.5}}).select({_id:1})
    console.log(data)
    let newThing = await BookModel.updateMany({author:data}, {$inc:{"price":10}},{new:true})
    res.send({msg : newThing})
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
module.exports. createBook=  createBook;
module.exports.getBookdata= getBookdata;
module.exports.createBookDetails= createBookDetails;
module.exports.updateData= updateData;
module.exports.updatePrice= updatePrice;