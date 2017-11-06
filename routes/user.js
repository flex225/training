const express = require('express')
const router = express.Router()
const userDAO = require('../dbs/user')
const passport = require('passport')

//if you want to use for every route
// router.use(passport.authenticate('bearer', { session: false }));
router.use('/user', router)

router.get('/',
    passport.authenticate('bearer', { session: false }),
    function (req, res) {
        userDAO.getAllUsers()
            .then(function (users) {
                res.send(users)
            }).catch(function (err) {
                if (err) {
                    res.send('couldn\'t get all users, please check console')
                }
            })
    })

router.post('/', function (req, res) {
    userDAO.createUser(req.body.name)
        .then(function (user) {
            res.send('inserted')
        }).catch(function (err) {
            if (err) {
                res.send('couldn\'t create user, please check console log')
                return
            }
        })
})

router.post('/addFriend',
    passport.authenticate('bearer', { session: false }),
    function (req, res) {
        userDAO.addFriend(req.user.id, req.body.user_id )
            .then(function (user) {
                res.send(user)
            }).catch(function (err) {
                res.send(err)
            })
    })

module.exports = router;