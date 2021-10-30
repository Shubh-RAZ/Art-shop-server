const mongoose = require('mongoose')
const schema = mongoose.Schema

const userData = new schema( {
    name:{
        type:String
    },
    email : {
        type: String
    },
    password: {
        type:String
    },
    carts : [
        {
            reference: {
                type:String
            }
        }
    ],
    purchased : [
        {
            reference: {
                type:String
            }
        }
    ]
})

module.exports = mongoose.model('userData' , userData)