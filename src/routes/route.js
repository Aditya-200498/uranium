const express = require('express');
const bookmodel = require('../bookmodel/bookmodel.js');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const bookModel = require("../bookmodel/bookmodel.js")
// const UserController= require("../controllers/userController")
const BookControler = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/bookcreation", BookControler.createBook)
 
router.get("/getBookList", BookControler.getBookList)

router.post("/getBooksInYear", BookControler.getBooksInYear)

router.post("/getParticularBooks", BookControler.getParticularBooks)

router.get("/price", BookControler.getINRBooks)

router.get("/random", BookControler.getRandomBooks)


    
    

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;