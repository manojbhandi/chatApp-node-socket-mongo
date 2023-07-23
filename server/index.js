const express = require('express')
const cors = require('cors');
// to communicate with mongoDB server
const mongoose = require('mongoose')


const app = express();
require('dotenv').config();
app.use(cors())

//parses requests with json payload
app.use(express.json())

//connect to DB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Successful")
}).catch((err) => {
    console.log(err.message)
})

const server = app.listen(process.env.port, () => {
    console.log(`server started on ${process.env.PORT}`)
})


