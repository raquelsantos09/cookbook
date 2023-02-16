const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard')
const router = express.Router()

/* GET home page */
router.get('/signup', isLoggedOut, (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', isLoggedOut, async (req, res) => {
    const body = { ...req.body }

    if (body.password.length < 6) {
        res.render('auth/signup', 
        { errorMessage: 'Password too short', 
        userData: req.body 
    })
    } else {
        const salt = bcrypt.genSaltSync(12)
        const passwordHash = bcrypt.hashSync(body.password, salt)
        console.log(passwordHash)

        delete body.password
        body.passwordHash = passwordHash
        try {
            await User.create(body)
            res.render('auth/login')
        } catch (error) {
            if (error.code === 11000) {
                console.log('Duplicate !')
                res.render('auth/signup', {
                    errorMessage: 'Username already used!',
                    userData: req.body,
                })
                console.log(req.body)
            } else {
                res.render('auth/signup', {
                    errorMessage: error,
                    userData: req.body,
                })
            }
        }
    }
})

router.get('/login', isLoggedOut, (req, res) => {
    res.render('auth/login')
})

router.post('/login', isLoggedOut, async (req, res, next) => {
    const body = req.body

    const userMatch = await User.find({ username: body.username })
    // console.log(userMatch)
    if (userMatch.length) {
        // User found
        const user = userMatch[0]

        if (bcrypt.compareSync(body.password, user.passwordHash)) {
            // Correct password

            const tempUser = {
                _id: user._id,
                username: user.username,
                email: user.email,
            }

            req.session.user = tempUser
            console.log(req.session)
            res.redirect('/profile')
        } else {
            // Incorrect password
            res.render('auth/login', { errorMessage: 'Incorrect password.' });
    
        }
    } else {
        // User not found
        res.render('auth/login', { errorMessage: 'User not found.' });
    }
})

// Get to display the profile page

router.get('/profile', isLoggedIn, (req, res) => {
    console.log(req.session)
    res.render('/profile', { user: req.session.user })
})

router.get('/logout', isLoggedIn, (req, res) => {
     req.session.destroy ()
     res.redirect('/')
    /*req.session.destroy(err => {
        if (err) next(err)
        req.session.user = null
        console.log( req.session.user)
        res.redirect('/')
    })*/
})

module.exports = router
