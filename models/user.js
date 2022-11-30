//This contains all the information needed to create members
//This contains all the information needed to create books
//Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create a Book Schema
const userSchema = new Schema (
    {
        email: { type: String },
        password: { type: String }

    }
)

// Create a Member model using the memberSchema
const Member = module.exports = mongoose.model('user', userSchema)

//export the Member model
module.exports.createUser = function(newUser, callback) {
    newUser.save(callback)
}