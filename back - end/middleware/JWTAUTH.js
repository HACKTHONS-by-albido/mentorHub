const jwt = require("jsonwebtoken");
const userSchema = require("../Model/userSchema");



module.exports.auth= (req, callback) => {
    try {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];
    jwt.verify(token,process.env.JWT, async function (err, data) {
      if (err) {
        console.log({ status: "failure",message:err.message });
         
      } else {
        const userId=await userSchema.findOne({_id:data.id})
       callback(null, userId);
        
        
      }
    });
} catch(error){
    console.log(error.message)
}
  }