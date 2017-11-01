const User = require('../models/user')

const getAllUsers = function (done) {
    //TODO: implement with promise
    User.find().then(function (users, err) {
        if (err) {
            console.log(err)
            done(err, null)
            return
        }
        done(null, users)
    })
}

const createUser = function (name, done) {
    //TODO: implement with promise
    const user = new User()
    if (name) {
        user.name = name.trim()
    }
    user.save().then(function (user) {
        done()
    }, function (err) {
        console.log(err)
        done('error')        
    })
}

module.exports = {
    getAllUsers,
    createUser
}