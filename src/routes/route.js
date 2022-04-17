const express = require('express');
const router = express.Router();
const AllControler = require("../controllers/Controller")


router.post("/authorcreation", AllControler.createAuthor)
 
router.post("/publisherCreation", AllControler.createPublisher)

router.post("/bookCreation", AllControler.createBook)

router.get("/getParticularBook", AllControler.getBookdata)

router.post("/bookDetails", AllControler.createBookDetails)

router.put("/books", AllControler.updateData)

router.put("/newPrice", AllControler.updatePrice)


    
    

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;