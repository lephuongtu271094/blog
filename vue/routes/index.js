const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('forntend/index', {
        vue: {
            head: {
                title: 'Home'
            },
            components: ['myheader','myfooter','slide','index-list']    
        }
    });
})

router.get('/about', (req, res, next) => {
    res.render('forntend/about', {
        vue: {
            head: {
                title: 'About'
            },
            components: ['myheader','myfooter','slide']    
        }
    });
})
router.get('/gallery', (req, res, next) => {
    res.render('forntend/gallery', {
        vue: {
            head: {
                title: 'Gallery'
            },
            components: ['myheader','myfooter']    
        }
    });
})
router.get('/contact', (req, res, next) => {
    res.render('forntend/contact', {
        vue: {
            head: {
                title: 'Contact'
            },
            components: ['myheader','myfooter']    
        }
    });
})
router.get('/single', (req, res, next) => {
    res.render('forntend/single', {
        vue: {
            head: {
                title: 'Single'
            },
            components: ['myheader','myfooter']    
        }
    });
})




router.get('/admin', (req, res, next) => {
    res.render('backend/login', {
        vue: {
            head: {
                title: 'admin'
            },
            components: ['header-admin','myfooter']    
        }
    });
})
router.get('/admin/register', (req, res, next) => {
    res.render('backend/register', {
        vue: {
            head: {
                title: 'Register'
            },
            components: ['header-admin','myfooter']    
        }
    });
})
router.route('/admin/posts')
    .get( (req, res, next) => {
        res.render('backend/posts', {
            data: {
            errors: ''
            },
            vue: {
                head: {
                    title: 'Posts'
                },
                components: ['header-admin','myfooter']    
            }
        });
    })
    .post(function (req, res) {
        var postId = req.params.id;
        req.checkBody('title', 'Title field is required').notEmpty();
        req.checkBody('post-description', 'Description field is required').notEmpty();
        req.checkBody('post-content', 'Content field is required').notEmpty();

        var errors = req.validationErrors();

        if (errors) {
                res.render('backend/posts', {
                data:{
                    errors: errors,
                    title: req.body.title || '',
                    description: req.body['post-description'] || '',
                    content: req.body['post-content'] || '',
                    delete : true
                },
                vue: {
                head: {
                    title: 'Posts'
                },
                components: ['header-admin','myfooter']    
            }
            })
        }

       
            var newPost = {};
            newPost.title = req.body.title;
            newPost.description = req.body['post-description'];
            newPost.content = req.body['post-content'];
            newPost.type = 'post';
            db.post.create(newPost).then(function () {
            //     req.flash('success', 'Update post successfully');
                res.redirect('/admin/post-list')
            })

    })


router.get('/admin/post-list', (req, res, next) => {
    db.post.findAll({
        where:{
            type: 'post'
        },
        order:['created']
    }).then(dulieu =>{
        // console.log(dulieu)
        // console.log(dulieu[0])
       res.render('backend/posts-list', {
        data:{
            posts: dulieu
        },
        
        vue: {
            head: {
                title: 'Posts-List'
            },
            components: ['header-admin','myfooter']    
        }
    });
    })
    
})





module.exports = router;
