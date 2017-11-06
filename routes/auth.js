const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const jwtSettings = require('../config/jwt')

router.post('/access_token', function (req, res) {
    User.find({_id: req.body._id})
    .then(function(user, users, art) {
        const token = jwt.sign({_id : req.body._id}, jwtSettings.secret)
        res.send(token)
    }).catch(function(err) {
        res.send(err.message)
    })
})

module.exports = router