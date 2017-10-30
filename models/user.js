const mongoose = require('mongoose')

//create User schema for mongo db
const UserSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

//export user model for js
module.exports = mongoose.model("user", UserSchema)