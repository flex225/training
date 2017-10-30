const express = require('express')
const router = express.Router()
const userDAO = require('../dbs/user')

router.get('/', function(req, res) {
    //get all users
    userDAO.getAllUsers(function(err, users) {
        if(err) {
            res.send('please check console')
            return
        }
        res.send(users)
    })
})

router.post('/', function(req, res) {
    //insert user
    userDAO.createUser(req.body.name, function(err) {
        if(err) {
            res.send('please check console log')
            return
        }
        res.send('inserted')
    })
})

module.exports = router;