const express = require('express');
const path = require('path');
const router = express.Router();


// @desc Login/Landing page
// @route GET /
router.get('/', function(req, res) {
    res.render('index', {
        title: "some value",
    });
})


// @desc About page
// @route GET /about
router.get('/about', function(req, res) {
    res.render('about');
})

// @desc Contact page
// @route GET /contact
router.get('/contact', function(req, res) {
    res.render('contact');
})


// @desc blog page
// @route GET /blog
router.get('/blog', function(req, res) {
    res.render('blog');
})

// @desc dashboard page
// @route GET /dashboard
router.get('/dashboard', function(req, res) {
    res.render('dashboard');
})


module.exports = router;