const User = require('../models/user')

const getAllUsers = function(done) {
    User.find({}, function (err, users) {
        if (err) {
            console.log(err)
            done(err, null)
            return
        }
        done(null, users)
    })
}

const createUser = function(name, done) {
    const user = new User()
    user.name = name.trim()
    user.save(function(err) {
        if(err) {
            console.log(err)
            done('error')
            return
        }
        done()
    })
}

module.exports = {
    getAllUsers,
    createUser
}