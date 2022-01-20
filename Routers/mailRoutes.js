const express = require('express')
const { sendMail } = require('../Controllers/mailController.js')
const mailRouter = express.Router()
mailRouter.post('/sendMail' , sendMail )



module.exports = mailRouter