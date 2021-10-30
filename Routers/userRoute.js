const express = require('express')
const { createUser , verifyToken , getUserDetails , loginUser } = require('../Controllers/userController')
const userRouter = express.Router()

userRouter.post('/createUser' , createUser)
userRouter.post('/verifyUser' , verifyToken )
userRouter.post('/getUser' , getUserDetails )
userRouter.post('/loginUser' , loginUser )

module.exports = userRouter