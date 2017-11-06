const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const jwt = require('jsonwebtoken')
const jwtSettings = require('./jwt')
const userDAO = require('../dbs/user')

passport.use(new BearerStrategy(
    function (token, done) {
        const verifiedToken = jwt.verify(token, jwtSettings.secret)
        if (verifiedToken) {
            userDAO.getUserById(verifiedToken._id)
                .then(function (user) {
                    if (!user) { return done(null, false) }
                    return done(null, user, { scope: 'read' })
                }).catch(function (err) {
                    if (err) { return done(err) }
                })
        }
    }
))