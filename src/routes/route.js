const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myMiddlewares= require("../Middlewares/middleware")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", myMiddlewares.tokenCheck, myMiddlewares.tokenVarify, userController.getUserData)

router.put("/users/:userId", myMiddlewares.tokenCheck, myMiddlewares.tokenVarify, myMiddlewares.updateChanges, userController.updateUser)

router.delete("/users/:userId",  myMiddlewares.tokenCheck, myMiddlewares.tokenVarify, myMiddlewares.updateChanges, userController.deleteData)

module.exports = router;