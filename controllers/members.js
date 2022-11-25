// This controls all the routes for the book model
//dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

//index route
router.get('/members', (req, res) => {
    // db.Member.find({}, (err, members) => {
        res.render('home')
})
//         , {
//             tabTitle: "Book Worm",
//             member: members
//         })
//     })
// })

module.exports = router