const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const experssVue = require('express-vue');
const session = require('express-session');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
const moment = require('moment');
const flash = require('connect-flash');
const Sequelize = require('sequelize');
const passport = require('passport');
const multer = require('multer');

const config = require('./config/config.js');
const index = require('./routes/index');
const users = require('./routes/users');

global.db = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);

db['user'] = db.import(__dirname + '/models/user.js');
db['post'] = db.import(__dirname + '/models/post.js');

db['post'].belongsTo(db['user'], {foreignKey: 'author'});


// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    // ComponentsDir tùy chọn lưu giữ các thành phần
    componentsDir: __dirname + '/views/components',
    // defaultLayout
    defaultLayout: 'layout'

})
app.engine('vue', experssVue)
app.set('view engine', 'vue');


// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'lephuongtu',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport);


app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        let namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}))


app.use(flash());
app.use((req, res, next) => {
    res.locals.message = req.session.flash;
    delete req.session.flash;
    next();
})

app.use('/', index);
app.route('/admin')
    .get((req, res, next) => {
        res.render('backend/login', {
            vue: {
                head: {
                    title: 'Admin'
                },
                components: ['header-admin', 'myfooter']
            }
        });
    })
    .post(passport.authenticate('local', {
        failureRedirect: '/admin',
        failureFlash: 'Invalid username and password'
    }), (req, res) => {
        console.log('Authentication successful');
        req.flash('success', 'You are logged in');
        res.redirect('/admin/post-list')
    })

app.use('/', checkAuthenticated, users);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error',{
//       data: {
//         err: err.message,

//       }
//   });
// });

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            data: {
                message: err.message,
                error: err
            }
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        data: {
            message: err.message,
            error: {}
        }
    });
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/admin');
    }
}
module.exports = app;
