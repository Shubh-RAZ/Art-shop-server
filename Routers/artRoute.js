const express = require('express')
const { addArt , getArt , getArtById } = require('../Controllers/ArtGalleryController')
const { sendMail }  = require('../Controllers/mailController')
const artRouter = express.Router()

artRouter.post('/addArt' , addArt )
artRouter.get('/getArt' , getArt )
artRouter.post('/getArtById' , getArtById )
artRouter.post('/mail', sendMail)

module.exports = artRouter