const BookModel= require("../bookmodel/bookmodel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    let allUsers= await BookModel.find().select({bookName: 1, authurName: 1, _id:0})
    res.send({msg: allUsers})
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

module.exports.createBook= createBook;
module.exports.getBookList= getBookList;
module.exports.getBooksInYear= getBooksInYear;
module.exports.getParticularBooks= getParticularBooks;
module.exports.getINRBooks= getINRBooks;
module.exports.getRandomBooks= getRandomBooks;