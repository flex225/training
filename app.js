//express setup
const express = require('express')
const app = express()

//mongo db connection
const db = require('./config/db')

//body parser for post parsing form requests
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

//passport setup
const passport = require('./config/passport')

//routes setup
const routes = require('./routes')(app)


app.listen(3000, function () {
    console.log('training app listening on port 3000!')
})