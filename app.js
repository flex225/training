const express = require('express')
const app = express()
//body parser for post parsing form requests
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

const routes = require('./routes')(app)
//connect to mogo db
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/training', { useMongoClient: true })

app.listen(3000, function () {
    console.log('training app listening on port 3000!')
})