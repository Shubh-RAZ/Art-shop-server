const userData = require('../SchemaUser')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({path:'../config.env'})

const createUser = async ( req , res ) => {
    try {
        const searchData = await userData.find({'email' : req.body.email})
        // console.log(searchData)
        if(searchData.length !== 0 ){
            const token = await createToken(searchData[0]._id)
              res.json([{
                message:'User Already Exists',
                token:token
            }])
        }
        else{
        const dataToBeAdded = new userData(req.body)
        dataToBeAdded.save()
        .then( async (response) => {
            const token = await createToken(response._id)
            res.json([{
                message:'success',
                token:token
            }
                ]
            )

        })

        .catch(err => {
            res.json('failure')
        })
    }
    }

    catch(err){
        res.json('failed')
    }
}

const loginUser = async ( req , res ) => {
    try{
        const { email , password } = req.body
        const dataArray = await userData.find({ 'email' : email , 'password' : password})
        if( dataArray.length !== 0 ){
              const token = await createToken(dataArray[0]._id)
        res.json(token)
        }
        else{
            res.json('failure')
        }
      
    }

    catch(err){
        res.json('failure')
    }
}

const verifyToken = async ( req , res ) => {
    try {
        // console.log(req.body)
        const userId = await jwt.verify( req.body.token , process.env.JWT_SECRET_TOKEN)
        res.json( userId.id)
    }

    catch(err){
        res.json('failure')
    }
}

const createToken = async(id) => {
    const token = await jwt.sign( { id} , process.env.JWT_SECRET_TOKEN)
    return token
}

const getUserDetails = async ( req , res ) => {
    try{
        const dataId = req.body.id
        const data = await userData.findById(dataId)
        res.json(data)
    }
    catch(err){
        res.json('failure')
    }
}

module.exports = { createUser , verifyToken , getUserDetails , loginUser }