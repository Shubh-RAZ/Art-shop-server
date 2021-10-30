const express = require('express')
const { addArt , getArt , getArtById } = require('../Controllers/ArtGalleryController')
const artRouter = express.Router()

artRouter.post('/addArt' , addArt )
artRouter.get('/getArt' , getArt )
artRouter.post('/getArtById' , getArtById )

module.exports = artRouter