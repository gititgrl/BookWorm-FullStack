//This contains all the information needed to create members
//This contains all the information needed to create books
//Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create a Book Schema
const memberSchema = new Schema (
    {
        name: { type: String, required: true },
        fav_book: { type: String },
        fav_author: { type: String }

    }
)

// Create a Member model using the memberSchema
const Member = mongoose.model('member', memberSchema)

//export the Member model, will be accessed in index.js
module.exports = Member
