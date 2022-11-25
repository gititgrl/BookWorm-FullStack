//This contains all the information needed to create members
//This contains all the information needed to create books
//Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create a Book Schema
const memberSchema = new Schema (
    {
        name: { type: String, required: true },
        favorite_book: { type: String, default: "https://m.media-amazon.com/images/I/51jyI6lYi1L._AC_SY780_.jpg"}

    }
)

// Create a Book model using the bookSchema
const Member = mongoose.model('Member', memberSchema)

//export the Book model, will be accessed in index.js
module.exports = Member
