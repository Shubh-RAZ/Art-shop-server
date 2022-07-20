const express = require('express')
const { addArt , getArt , getArtById , updateHeart } = require('../Controllers/ArtGalleryController')
const { sendMail }  = require('../Controllers/mailController')
const artRouter = express.Router()

artRouter.post('/addArt' , addArt )
artRouter.get('/getArt' , getArt )
artRouter.post('/getArtById' , getArtById )
artRouter.post('/updateHeart' , updateHeart )
artRouter.post('/mail', sendMail)

module.exports = artRouter