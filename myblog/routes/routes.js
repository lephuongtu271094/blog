const moment = require('moment')
const express = require('express')
const router = express.Router();
// const { db,config } = require('../pgp.js');
// const config = require('../config/config.js');

// module.exports = (app , express) => {
router.route('/')
    .get((req, res) => {  
        res.frontend('index.html', {
            titles: 'Home'
        })
    })
router.route('/about')
    .get((req, res) => {
        res.frontend('about.html', {
            titles: 'About'
        })
    })

router.route('/gallery')
    .get((req, res) => {
        res.frontend('gallery.html', {
            titles: 'Gallery'
        })
    })
router.route('/contact')
    .get((req, res) => {
        res.frontend('contact.html', {
            titles: 'Contact'
        })
    })
router.route('/single')
    .get((req, res) => {
        // hàm format ngày tháng
        // data[0].post_date = moment(data[0].post_date).format('MM-DD-YYYY');
        res.frontend('single.html', {
            titles: 'Single'
        })
    })
    
    //*************** backend *****************    
    
router.route('/admin')
    .get((req, res) => {
        res.backend('login.html',{ titles: 'Admin' })
    })
router.route('/users')
    .get((req, res) => {
        res.backend('register.html',{ titles: 'User' })
    })

router.route('/posts')
    .get((req, res) => {
        res.backend('posts.html',{ titles: 'Post' })
    })
    .post((req, res) => {
        req.checkBody('title', 'Title field is required').notEmpty();
        req.checkBody('post-description', 'Description field is required').notEmpty();
        req.checkBody('post-content', 'Content field is required').notEmpty();

        let errors = req.validationErrors();

        if (errors) {
            return res.backend('posts.html', {
                errors: errors,
                title: req.body.title || '',
                description: req.body['post-description'] || '',
                content: req.body['post-content'] || ''
            })
        }

        let newPost = {}
        newPost.title = req.body.title
        newPost.description = req.body['post-description']
        newPost.content = req.body['post-content']
        newPost.type = 'post'
        db.post.create(newPost).then(function () {
            req.flash('success', {msg: 'Create post successfully'});
            res.redirect('/posts')
        })
        console.log(req.flash)
    })


router.route('/list')
    .get((req, res) => {
        res.backend('post-list.html',{ titles: 'Posts List' })
    })
// }

module.exports = router;