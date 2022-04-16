const express = require('express');
const router = express.Router();
const AllControler = require("../controllers/Controller")


router.post("/authorcreation", AllControler.createAuthor)
 
router.post("/publisherCreation", AllControler.createPublisher)

router.get("/getBooksData", AllControler.getBookdata)

//router.post("/getParticularBooks", BookControler.getParticularBooks)

//router.get("/price", BookControler.getINRBooks)

//router.get("/random", BookControler.getRandomBooks)


    
    

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;