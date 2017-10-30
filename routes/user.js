const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', function(req, res) {
    //get all users
    User.find({}, function(err, users) {
        if(err) {
            console.log(err)
            return
        }
        res.send(users)
    })
})

router.post('/', function(req, res) {
    //insert user
    const user = new User()
    user.name = req.body.name.trim()
    user.save(function(err) {
        if(err) {
            console.log(err)
            res.send("error please check console")
            return
        }
        res.send("inserted")
    })
})

module.exports = router;