var userSchema = require("../Model/userSchema");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    const { username, email, password, role } = req.body;

    const finduser = await userSchema.find({ email: email });
    if (finduser.length > 0) {
      return res.json({ status: false, message: "Already registered" });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
       const user= await userSchema.create({
          username: username,
          email: email,
          password: hash,
          role: role,
        });
        let rep = {
          id: user._id,
        };
        let token = jwt.sign(rep, process.env.JWT);
        res.status(200).json({
          status: "success",
          message: "successfully register",
          data: user,
          auth: true,
          token: token,
          push: "/AdduserData",
          tokenName: "token",
        });
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    
    const user = await userSchema.findOne({ email: email });
    console.log(user);
  
   if (user) {
      const bcryp_pass = await bcrypt.compare(password, user.password);
      if (!bcryp_pass) {
        res.json({
          status: "failure",
          auth:false,
          message: "password or username is wrong",
        });
      } else {
        let rep = {
          id: user._id,
        };
        let token = jwt.sign({ id: rep.id }, process.env.JWT);
        
          if (user.role=='mentor') {
            
            res.status(200).json({
              status: "success",
              data: user,
              auth: true,
              token: token,
              push: "/Home",
              tokenName: "token",
              message: "Welcome sir",
  
            });
          }else if(user.role=="mentee"){
            res.status(200).json({
              status: "success",
              data: user,
              auth: true,
              token: token,
              push: "/Home",
              tokenName: "token",
              message: "Welcome sir",
  
            });
          }else{
            res.status(200).json({
              status: "success",
              data: user,
              auth: true,
              token: token,
              push: "/AdduserData",
              tokenName: "token",
              message: "Welcome sir",
  
            });
          }
        
      }
    } else {
       res.json({
        auth: false,
        message: "invalid username or password",
      });
    }
  },

};
