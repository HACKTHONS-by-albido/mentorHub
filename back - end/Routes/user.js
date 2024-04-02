const express=require('express')
const userRoutes=express.Router()
const {register, login}=require('../Controller/user')

userRoutes.post('/auth/register',register)
userRoutes.post('/auth/login',login)



module.exports = userRoutes