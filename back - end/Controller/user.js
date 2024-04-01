
var userSchema = require('../Model/userSchema')
var bcrypt=require('bcrypt')



module.exports={
    register: async (req,res)=>{
        const {username,email,password,role}=req.body

            const finduser = await userSchema.find({email:email})
            if(finduser.length>0){
                return res.json({status:false,message:'Already registered'})
            }
            else{
                bcrypt.hash(password,10,async function(err,hash){
                    await userSchema.create({
                        username:username,
                        email:email,
                        password:hash,
                        role:role
                    })
                    
                }) 
       
        res.status(200).json({
            status:"success",
            message:"successfully register",
            data:{username,email}
        })
    }

          },
}