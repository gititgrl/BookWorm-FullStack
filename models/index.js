//This file is to connect to the database via Mongoose and pass my model to the controller

// dependencies
const mongoose = require("mongoose");

// connect to MongoDB via mongoose
const connectionString = "mongodb://127.0.0.1/book-worm"
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// console.log() connection status
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

// access models
module.exports.Book = require("./book.js");
module.exports.Member = require("./member.js");