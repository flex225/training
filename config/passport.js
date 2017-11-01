const User = require('../models/user')
const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy

passport.use(new BearerStrategy(
    function (token, done) {
        User.findOne({ _id /*NOTE: change to token after user collection creation*/ : token }, function (err, user) {
            if (err) { return done(err) }
            if (!user) { return done(null, false) }
            return done(null, user, { scope: 'read' })
        });
    }
));