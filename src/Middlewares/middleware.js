const jwt = require("jsonwebtoken");


const authCheck= async function (req,res, next) {
let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

    else {
        next()
    }
}

const tokenCheck= async function (req,res, next) {
    let headerToken= req.headers["x-auth-token"]
  if(!headerToken) {
    return res.send("author token is missing")
  } else {
      next()
  }
}

const tokenVarify= async function (req, res, next) {
    let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    else {
        next()
    }
}







module.exports.authCheck = authCheck;
module.exports.tokenCheck = tokenCheck;
module.exports.tokenVarify = tokenVarify;

