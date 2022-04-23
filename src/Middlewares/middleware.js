const jwt = require("jsonwebtoken");



const authCheck= async function (req,res, next) {
  try{
let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

    else {
        next()
    }
}
catch(err) {
  res.status(500).send({msg: err.message})
}
}

const tokenCheck= async function (req,res, next) {
  try {
    let headerToken= req.headers["x-auth-token"]
  if(!headerToken) {
    return res.status(403).send("author token is missing")
  } else {
      next()
  }
}
catch(err) {
  res.status(500).send({msg: err.message})
}
}


const tokenVarify= async function (req, res, next) {
  try{
  let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
    let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });
    else {
        next()
    }
    
} 
catch(err) {
  res.status(500).send({msg: err.message})
}
}

let updateChanges = async function (req, res, next) {
  try{
  let id = req.params.userId
  let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
  let decodedToken = jwt.verify(token, "functionup-thorium");
if (decodedToken.userId != id) {
  res.send("user is not authorised")
}
else {
  next()
}
}
catch(err) {
  res.status(500).send({msg: err.message})
}
}









module.exports.authCheck = authCheck;
module.exports.tokenCheck = tokenCheck;
module.exports.tokenVarify = tokenVarify;
module.exports.updateChanges = updateChanges;

