const express = require('express')
const app = express()
const expressRouter = express.Router();

const routes = require('./routes')(app, expressRouter)

app.listen(3000, function () {
    console.log('training app listening on port 3000!')
})