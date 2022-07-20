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
        // console.log(dataToBeShown)
        res.json(dataToBeShown)
    }

    catch {
        res.json('error while getting art')
    }
}

const updateHeart = async ( req , res ) => {
    try{

        artData.findById(req.body.id, function (err, doc) {
            if (err){
                console.log(err);
            }
            else{
                let heart
                if(req.body.increase){
                    heart = doc.hearts + 1
                }
                else{
                    if(doc.hearts == 0){
                        heart =0
                    }
                    else{
                        heart = doc.hearts- 1
                    }
                }
                
                artData.findByIdAndUpdate(req.body.id, { hearts: heart },
                function (err, docs) {
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("Updated User : ", docs);
                        res.json(heart)
                    }
});

            }
        })


        }

    catch{
        console.log('Error while updating heart')
    }
}

const getArtById = async ( req , res ) => {
    try{
        const temp = req.body
        var cartArray = []

        const allData = await artData.find()

        allData.map( dt => {
           temp.map( (data,index) => {
            if(index => 0){
                if(dt._id == data){
                    console.log(dt)
                    cartArray.push(dt)
                }
            }
           })
       })
        // 
        // console.log(temp)
     
        // console.log(cartArray)
        res.json(cartArray)
    }

    catch {
        res.json('error while getting individual art')
    }
}


module.exports = { addArt , getArt , getArtById , updateHeart}
