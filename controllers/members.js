// This controls all the routes for the book model
//dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

//Dashboard Route
router.get('/dashboard', (req, res) => {
        db.Member.find({}, (err, members) => {
            res.render('dashboard', {
                tabTitle: 'My Bookworm',
                member: members
        })
    })
})
//New Route
router.get('/newmember', (req, res) => {
    console.log('newmember');
    res.render('newMember', {
        tabTitle: "New Member"
    })
})

//Create Rpute
router.post('/', (req, res) => {
    db.Member.create(req.body, (err, member) => {
        res.redirect('/dashboard')
    })     
})
//Update Route
router.put('/members/:id', (req, res) => {
    db.Member.findByIdAndUpdate(req.params.id, req.body, {new: true }, (err, member) => {
        res.send(member)
    })
})
//Edit ejs route
router.get('/:id/edit', (req, res) => {
    db.Member.findById(req.params.id, (err, members) => {
        res.render('editMember', {
            member: members,
            tabTitle: "Edit"
        })
    })
})
//Delete Route
router.delete('/:id', (req, res) => {
    db.Member.findByIdAndRemove(req.params.id, (err, member) => {
        res.redirect('/dashboard')
    })
})
//Show Route
router.get('/:id', (req, res) => {
    db.Member.findById(req.params.id, (err,members) => {
        res.render('showMember', {
            member: members,
            tabTitle: 'Members'
        })
    })
})


//export these routes so they are accessible in server.js
module.exports = router