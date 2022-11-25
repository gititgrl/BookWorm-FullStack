//This contains all the information needed to create books
//Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create a Book Schema
const bookSchema = new Schema (
    {
        name: { type: String, required: true },
        author: { type: String, required: true},
        description: { type: String, required: true },
        img: { type: String, default: "https://m.media-amazon.com/images/I/51jyI6lYi1L._AC_SY780_.jpg"},
        genre: { type: String, required: true },

    }
)

// Create a Book model using the bookSchema
const Book = mongoose.model('book', bookSchema)

//export the Book model, will be accessed in index.js
module.exports = Book