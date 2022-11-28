//This holds the routes for the login page
var express = require('express')
var router = express.Router()

//Login Credential to start with
const credential = {
    email: "admin@gmail.com",
    password: "books"
}
//Login Route--When the user successful logs in they will be redirected to their dashboard. If it is an unsuccessful login they will be redirected to a Invalid page
router.post('/login', (req, res) => {
    if(req.body.email === credential.email && req.body.password === credential.password){
        req.session.user = req.body.email;
        console.log('logging in')
        //res.redirect('/dashboard');
        res.send("Login Successful")
    }else{
        res.end("Invalid Login")
        console.log('not logging in')
    }
})

// route for dashboard of login bookworm
router.get('/dashboard', (req, res) =>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else {
        res.end("Unauthorized")
    }
})
module.exports = router;
