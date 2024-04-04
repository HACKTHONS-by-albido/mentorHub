const express=require('express')
const userRoutes=express.Router()
const {register, login, profile, getDetails}=require('../Controller/user')
const userJwtAuthentication = require('../middleware/userJwtAuthentication')

userRoutes.post('/auth/register',register)
userRoutes.post('/auth/login',login)
userRoutes.get('/profile',userJwtAuthentication,profile)
userRoutes.get('/getDetails/:id',userJwtAuthentication,getDetails)





module.exports = userRoutes