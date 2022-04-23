const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
try {
  let data = req.body;
 // if (!await user.exists(data)) {
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
//} else
 res.send({msg: "This User already exists."})
} catch(err) {
  res.status(500).send({msg: err.message})
}

}



const loginUser = async function (req, res) {
  try {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(404).send({
      status: false,
      msg: "username or the password is not corerct",
    });


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(202).send({ status: true, data: token });
} catch(err) {
  res.status(500).send({msg: err.message})
}

}

const getUserData = async function (req, res) {
  try{
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // let decodedToken = jwt.verify(token, "functionup-thorium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
    return res.status(404).send({ status: false, msg: "No such user exists" });
  }else {

  res.send({ status: true, data: userDetails });
  }
}
catch(err) {
  res.status(500).send({msg: err.message})
}
}


const updateUser = async function (req, res) {
try {
  let headerToken= req.headers["x-auth-token"]
  if(!headerToken) {
    return res.status(404).send("author token is missing")
  }
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },  userData, {new: true});
  res.status(201).send({ status: updatedUser, data: updatedUser });
}
catch(err) {
  res.status(500).send({msg: err.message})
}
}



const deleteData = async function(req, res) {
  // let headerToken= req.headers["x-auth-token"]
  // if(!headerToken) {
  //   return res.send("author token is missing")
  // }
  try {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isDeleted: true}, {new: true});
    res.status(200).send({ status: updatedUser, data: updatedUser });

}
catch(err) {
  res.status(500).send({msg: err.message})
}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteData = deleteData;

