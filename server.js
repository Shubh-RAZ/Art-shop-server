const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config({
    path:'./config.env'
})
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3500

const userRouter = require('./Routers/userRoute')
const artRouter = require('./Routers/artRoute')
const mailRouter = require('./Routers/mailRoutes')

app.use(cors())
app.use(bodyParser.json())

app.use('/art', userRouter)
app.use('/art', artRouter)
app.use('/art', mailRouter)



const connectionMongo = require('./Mongo_connection')
connectionMongo()


app.listen( PORT , () => {
    console.log(`App is listening on PORT ${PORT}`)
})