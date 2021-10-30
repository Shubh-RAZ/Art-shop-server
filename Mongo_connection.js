const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

function ConnectMongo() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL , { useNewUrlParser:true , useCreateIndex: true , useFindAndModify: true , useUnifiedTopology: true})

    const connection = mongoose.connection

    connection.once( 'open' , () => {
        console.log('Mongo db connnection established successfully')
    })

    .catch( err => {
        console.log(err)
    })
}

module.exports = ConnectMongo