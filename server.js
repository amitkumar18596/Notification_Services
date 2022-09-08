const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')

mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("connected to mongoDB");
}, err =>{
    console.log("Some error happened ", err.message);
})

/**
 * Stitch rhe router to server.js
 */
require('./routes/notification.route')(app)
/**
 * Attach the cron file
 */
require('./schedulers/emailScheduler')


app.listen(8000, ()=>{ // TODO : Move this port to config folder and .env
    console.log("Server started");
})