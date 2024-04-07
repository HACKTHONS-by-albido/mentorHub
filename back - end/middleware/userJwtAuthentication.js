const jwt = require("jsonwebtoken");
const userSchema = require("../Model/userSchema");
require("dotenv").config();


module.exports= (req, res, next) => {
    try {
    let authHeader = req.headers.authorization;
    if (authHeader == undefined) {
      res.status(401).send({ error: "no tocken provider" });
    }
    let token = authHeader.split(" ")[1];
    jwt.verify(token,process.env.JWT, async function (err, data) {
      if (err) {
        console.log(err.message);
        res.status(500).json({ status: "failure",message:err.message });
         
      } else {
        const userId=await userSchema.findOne({_id:data.id})
        if(userId){
          res.token= userId._id
          next();

        }
        
      }
    });
} catch(error){
    res.status(400).send(error.message)
}
  }