const express = require('express')
const router = express.Router()
const userDAO = require('../dbs/user')
const passport = require('passport')

//if you want to use for every route
// router.use(passport.authenticate('bearer', { session: false }));

router.get('/',
    passport.authenticate('bearer', { session: false }),
    function (req, res) {
        //get all users
        userDAO.getAllUsers(function (err, users) {
            if (err) {
                res.send('couldn\'t get all users, please check console')
                return
            }
            res.send(users)
        })
    })

router.post('/', function (req, res) {
    //insert user
    userDAO.createUser(req.body.name, function (err) {
        if (err) {
            res.send('couldn\'t create user, please check console log')
            return
        }
        res.send('inserted')
    })
})

module.exports = router;