const express = require('express');
const router = express.Router();
const AllControler = require("../controllers/Controller")
const BatchController= require("../controllers/batchController")
const DeveloperController= require("../controllers/developerController")


router.post("/batches", BatchController.createBatch)
 
router.post("/developers", DeveloperController.createDeveloper)

router.get("/getdeveloper", DeveloperController.getDevelopers)

router.get("/getFemaleDev", DeveloperController.getFemaleDeveloper)

router.get("/getnewdeveloper", DeveloperController.programAndPercentage)

router.put("/books", AllControler.updateData)

router.put("/newPrice", AllControler.updatePrice)


    
    

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;