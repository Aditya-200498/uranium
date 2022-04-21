const express = require('express');
const router = express.Router();
const AllControler = require("../controllers/Controller")
const BatchController= require("../controllers/productController")
const DeveloperController= require("../controllers/developerController")
const MyProductController= require("../controllers/productController")
const Mymiddleware= require("../middlewares/middleware")
const MyOrderController= require("../controllers/orderController")
const MyUserController= require("../controllers/userController")



router.post("/product",  MyProductController.createProduct)
 
//router.post("/order", Mymiddleware.headerValidate, MyOrderController.createOrder)

router.post("/user",  Mymiddleware.headerValidate, MyUserController.createUser)

router.post("/orderMain",  MyOrderController.createNewOrder)

router.get("/getnewdeveloper", DeveloperController.programAndPercentage)

router.put("/books", AllControler.updateData)

router.put("/newPrice", AllControler.updatePrice)


    
    

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;