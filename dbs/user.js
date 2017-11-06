const User = require('../models/user')

//NOTE: get all users
const getAllUsers = function () {
    return new Promise(function (resolve, reject) {
        User.find().then(function (users) {
            if (!users) {
                reject("invalid")
            }
            resolve(users)
        }).catch(function (err) {
            if (err) {
                console.log(err)
                reject(err)
            }
        })
    })
}

const getUserById = function (_id) {
    return new Promise(function (resolve, reject) {
        User.findOne({_id: _id})
            .then(function (user) {
                resolve(user)
            }).catch(function (err) {
                reject(err)
            })
    })
}

//NOTE: create a user
const createUser = function (name) {
    return new Promise(function (resolve, reject) {
        if (!name) {
            reject('name is null')
        }
        const user = new User()
        user.name = name.trim()
        user.save().then(function (user) {
            resolve(user)
        }).catch(function (err) {
            console.log(err)
            reject('error, please check console')
        })
    })
}

//NOTE: making friend request
const addFriend = function (currentUserId, requestedUserId) {
    return new Promise(function (resolve, reject) {
        getUserById(requestedUserId)
            .then(function (user) {
                user.pendingFriends.push(currentUserId)
                user.save().then(function (updatedUser) {
                    resolve(updatedUser)
                }).catch(function (err) {
                    console.log(err)
                    reject('error while updating user')
                })
            }).catch(function (err) {
                console.log(err)
                reject('error while creating user')
            })
    })
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    addFriend
}