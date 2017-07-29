const express = require('express');
const router = express.Router();
const moment = require('moment')

/* GET home page. */
router.get('/', (req, res, next) => {
    db.post.findAndCountAll({
        include:{
            model: db.user,
            attribute: ['displayname']
        },
        where: {
            type: "post"
        },
        order: ['created','DESC'],
    }
    ).then(result => {
        
    //     result.map(function(element) {
    //         result = moment(element.created).format("DD-MM-YYYY")
    //         return result
    //     });
    //     console.log(result[0])
    //     // data[0].post_date = moment(data[0].post_date).format('MM-DD-YYYY');

    // //    console.log(result)
    // //    console.log(result[0].created = moment(result[0].created).format('MM-DD-YYYY'))
    // // console.log(result)
       res.render('forntend/index', {
           data:{
               posts : result
           },
        vue: {
            head: {
                title: 'Home'
            },
            components: ['myheader', 'myfooter', 'slide', 'index-list']
        }
    });
    })
    
})

router.get('/about', (req, res, next) => {
    res.render('forntend/about', {
        vue: {
            head: {
                title: 'About'
            },
            components: ['myheader', 'myfooter', 'slide']
        }
    });
})
router.get('/gallery', (req, res, next) => {
    res.render('forntend/gallery', {
        vue: {
            head: {
                title: 'Gallery'
            },
            components: ['myheader', 'myfooter']
        }
    });
})
router.get('/contact', (req, res, next) => {
    res.render('forntend/contact', {
        vue: {
            head: {
                title: 'Contact'
            },
            components: ['myheader', 'myfooter']
        }
    });
})


// router.get('/single', (req, res, next) => {
//     res.render('forntend/single', {
//         vue: {
//             head: {
//                 title: 'Single'
//             },
//             components: ['myheader', 'myfooter']
//         }
//     });
// })
router.get('/single/:id', (req, res) => {
    db.post.find({
        include:{
            model: db.user,
            attribute: ['displayname']
        },
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        if (result) {
            console.log(result)
            res.render('forntend/single',{
                    data: {
                       post: result
                    },
                    vue: {
                        head: {
                            title: 'Single'
                        },
                        components: ['myheader', 'myfooter']
                    }
                }
            );
        } else {
            res.redirect('/');
        }
    }).catch(function (err) {
        res.render('error', {error: err})
    })
});



module.exports = router;
