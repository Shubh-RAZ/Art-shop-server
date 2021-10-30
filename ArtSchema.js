const mongoose = require('mongoose')
const schema = mongoose.Schema

const artSchema = new schema( {
    title:{
        type:String
    },
    description : {
        type: String
    },
    hearts: {
        type:Number
    },
    location : {
        type : String
    },
    category:{
        type:String
    },
    price : {
        type:Number
    }

})

module.exports = mongoose.model('artData' , artSchema)