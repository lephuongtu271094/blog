/**
 * Created by tu on 25/07/2017.
 */

const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const multer = require('multer');


router.get('/admin/user', (req, res, next) => {
    db.user.findAll().then(result => {
        res.render('backend/user', {
            data: {
                users : result,
                user : req.user
            },
            vue: {
                head: {
                    title: 'User'
                },
                components: ['header-admin', 'myfooter']
            }
        });
    })

})

router.route('/admin/register')
    .get((req, res, next) => {
        res.render('backend/register', {
            vue: {
                head: {
                    title: 'Register'
                },
                components: ['header-admin', 'myfooter']
            }
        })
    })
    .post((req, res , next) => {
        req.checkBody('username', 'User Name field is required').notEmpty();
        req.checkBody('display_name', 'Display name field is required').notEmpty();
        req.checkBody('email', 'Email field is required').notEmpty();
        req.checkBody('email', 'Email not vaid').isEmail();
        req.checkBody('password', 'Password field is required').notEmpty();
        req.checkBody('confirm_password', 'Password do not match').equals(req.body.password);

        let errors = req.validationErrors();
        if (errors) {
            return res.render('backend/register', {
                data: {
                    errors: errors,
                    username: req.body.username || '',
                    display_name: req.body.display_name || '',
                },
                vue: {
                    head: {
                        title: 'Register'
                    },
                    components: ['header-admin', 'myfooter']
                }
            })
        }
        bcrypt.hash(req.body.password, 10, (err,hash) => {
            if(err) throw err;
            db.user.create({
                username: req.body.username,
                displayname: req.body.display_name,
                email: req.body.email,
                password: hash
            }).then(() => {
                res.redirect('/admin/user')
            }).catch(err => {
                return res.render('backend/register', {
                    data: {
                        errors: err,
                        username: req.body.username,
                        display_name: req.body.display_name,
                    },
                    vue: {
                        head: {
                            title: 'Register'
                        },
                        components: ['header-admin', 'myfooter']
                    }
                })
            })
        })
    })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //nơi chứa file upload
        cb(null, './public/image-posts')
    },
    filename: function (req, file, cb) {
        // cb(null, shortid.generate() + '-' + file.originalname)
        // Tạo tên file mới cho file vừa upload
        cb(null, file.originalname)
    }

})
function fileFilter(req, file, cb) { // hàm phân loại file upload
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') { // nếu là đuôi png,jpg,jpeg
        // nếu là file image thì upload file.
        cb(null, true)
    } else {
        // nếu không phải thì bỏ qua phần upload
        cb(new Error(file.mimetype + ' is not accepted'))
    }
}
// các thuộc tính của multer gán cho biến upload
app.upload = multer({storage: storage, fileFilter: fileFilter})


router.route('/admin/posts')
    .get((req, res, next) => {
        res.render('backend/posts', {
            vue: {
                head: {
                    title: 'Posts'
                },
                components: ['header-admin', 'myfooter']
            }
        });
    })
    .post(app.upload.single('image'),(req, res) => {

         console.log(req.body);
         console.log('aaaaa');
         console.log(req.file);
        let image = req.file.filename;

        req.checkBody('title', 'Title field is required').notEmpty();
        req.checkBody('post-description', 'Description field is required').notEmpty();
        req.checkBody('post-content', 'Content field is required').notEmpty();

        let errors = req.validationErrors();

        if (errors) {
            res.render('backend/posts', {
                data: {
                    errors: errors,
                    title: req.body.title || '',
                    description: req.body['post-description'] || '',
                    content: req.body['post-content'] || '',
                },
                vue: {
                    head: {
                        title: 'Posts'
                    },
                    components: ['header-admin', 'myfooter']
                }
            })
        }


        let newPost = {};
        newPost.title = req.body.title;
        newPost.description = req.body['post-description'];
        newPost.content = req.body['post-content'];
        newPost.type = 'post';
        newPost.author = req.user.id,
        newPost.img = image,
        newPost.img_url = req.user.image_url
        db.post.create(newPost).then(function () {
            req.flash('success', 'Update post successfully');
            res.redirect('/admin/post-list')
        })

    })


router.get('/admin/post-list', (req, res, next) => {
    db.post.findAll({
        where: {
            type: 'post'
        },
        order: ['created']
    }).then(dulieu => {
        // console.log(dulieu)
        // console.log(dulieu[0])
        res.render('backend/posts-list', {
            data: {
                posts: dulieu
            },

            vue: {
                head: {
                    title: 'Posts-List'
                },
                components: ['header-admin', 'myfooter']
            }
        });
    })
})


router.route('/admin/posts/:id')
    .get((req, res, next) => {
        db.post.findById(req.params.id).then(post => {
            res.render('backend/posts', {
                data: {
                    title: post.title,
                    description: post.description,
                    content: post.content,
                    delete: true
                },
                vue: {
                    head: {
                        title: 'Posts'
                    },
                    components: ['header-admin', 'myfooter']
                }
            });
        })

    })
    .post(app.upload.single('image'),(req, res) => {
        let image = req.file.filename;
        let postId = req.params.id;
        req.checkBody('title', 'Title field is required').notEmpty();
        req.checkBody('post-description', 'Description field is required').notEmpty();
        req.checkBody('post-content', 'Content field is required').notEmpty();

        let errors = req.validationErrors();

        if (errors) {
            res.render('backend/posts', {
                data: {
                    errors: errors,
                    title: req.body.title || '',
                    description: req.body['post-description'] || '',
                    content: req.body['post-content'] || '',
                    delete: true
                },
                vue: {
                    head: {
                        title: 'Posts'
                    },
                    components: ['header-admin', 'myfooter']
                }
            })
        }

        db.post.findById(postId).then(post => {
            let newPost = {};
            newPost.title = req.body.title;
            newPost.description = req.body['post-description'];
            newPost.content = req.body['post-content'];
            newPost.type = 'post';
            newPost.author = req.user.id,
            newPost.img = image,
            newPost.img_url = req.user.image_url
            post.update(newPost).then(function () {
                req.flash('success', 'Update post successfully');
                res.redirect('/admin/post-list')
            })
        })
    })
    .delete((req, res) => {
        let postId = req.params.id || 0
        db.post.destroy({
            where: {
                id: postId
            }
        }).then(result => {
            req.flash('success', 'Delete post successfully');
            res.redirect('/admin/post-list')
        })
    })

router.get('/admin/logout', function (req,res) {
    req.logout();
    req.flash('success','You logged out');
    res.redirect('/admin');
})

module.exports = router;