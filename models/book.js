//This contains all the information needed to create books
//Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create a Book Schema
const bookSchema = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, default: ''},
        rating: { type: Number, required: true },

    }
)

// Create a Book model using the bookSchema
const Book = mongoose.model('Book', bookSchema)

//export the Book model, will be accessed in index.js
module.exports = Book