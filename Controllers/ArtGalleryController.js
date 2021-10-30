const artData = require('../ArtSchema.js')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({path:'../config.env'})

const addArt = async ( req , res ) => {
    try{
        const dataToBeAdded = new artData(req.body)
        dataToBeAdded.save()
        .then( res.json('success'))

        .catch( err => {
            res.json('failure')
        })

    }

    catch{
        res.json('error while adding art')
    }
}

const getArt = async ( req , res ) => {
    try {
        const dataToBeShown = await artData.find()
        console.log(dataToBeShown)
        res.json(dataToBeShown)
    }

    catch {
        res.json('error while getting art')
    }
}

const getArtById = async ( req , res ) => {
    try{
        const temp = req.body
        var cartArray = []

        const allData = await artData.find()

        allData.map( dt => {
           temp.map( (data,index) => {
            if(index > 0){
                if(dt._id == data){
                    cartArray.push(dt)
                }
            }
           })
        })


     
        console.log(cartArray)
        res.json(cartArray)
    }

    catch {
        res.json('error while getting individual art')
    }
}


module.exports = { addArt , getArt , getArtById }
