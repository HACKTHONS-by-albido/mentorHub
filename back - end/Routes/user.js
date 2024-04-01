const express=require('express')
const userRoutes=express.Router()
const userController=require('../Controller/user')

userRoutes.post('/auth/register',userController.register)


module.exports = userRoutes