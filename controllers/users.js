const express = require('express')
const router = express.Router()
const User = require('../models/user')


//Home Route
router.get('/', (req, res, next) => {
    res.send('Home Page to login or register')
})
//Register Route
router.get('/register', (req, res, next) => {
    res.render('register', {
    tabTitle: 'Register'
    })
})
//Login route
router.get('/login', (req, res, next) => {
    res.render('login', {
        tabTitle: 'Login'
    })
})
//Add new member register route
router.post('/register', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const password2 = req.body.password
    console.log(req.body.email)

    if (!email || !password || !password2) {
        res.render("signup", { err: "All Fields Required !", csrfToken: req.csrfToken() });
    } else if (password != confirmpassword) {
        res.render("signup", { err: "Password Don't Match !", csrfToken: req.csrfToken() });
    } else {

        // validate email and username and password 
        // skipping validation
        // check if a user exists
        user.findOne({ $or: [{ email: email }, { username: username }] }, function (err, data) {
            if (err) throw err;
            if (data) {
                res.render("signup", { err: "User Exists, Try Logging In !", csrfToken: req.csrfToken() });
            } else {
                // generate a salt
                bcryptjs.genSalt(12, (err, salt) => {
                    if (err) throw err;
                    // hash the password
                    bcryptjs.hash(password, salt, (err, hash) => {
                        if (err) throw err;
                        // save user in db
                        user({
                            email: email,
                            password: hash,
                            googleId: null,
                            provider: 'email',
                        }).save((err, data) => {
                            if (err) throw err;
                            // login the user
                            // use req.login
                            // redirect , if you don't want to login
                            res.redirect('/login');
                        });
                    })
                });
            }
        });
    }
});

module.exports = router