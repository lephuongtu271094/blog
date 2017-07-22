const express = require('express');
const app = express();
const session = require('express-session');
const expressValidator = require('express-validator');
const path = require('path');
const favicon = require('serve-favicon');
const methodOverride = require('method-override');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const moment = require('moment')
const flash = require('connect-flash');
const Sequelize = require('sequelize')
const routes = require('./routes/routes');
const config = require('./config/config.js');


global.db = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);

db['user'] = db.import(__dirname + '/models/user.js');
db['post'] = db.import(__dirname + '/models/post.js');

db['post'].belongsTo(db['user'], { foreignKey: 'author' });


// const { db, } = require('./pgp');



// hàm cấu hình nunjucks để chạy cùng một lúc cả backend và frontend cùng một cổng 
//res.backend and res.frontend  
app.use((req, res, next) => {
    res.frontend = (url,obj) => {
        nunjucks.configure('view/frontend', {
            autoescape: false,
            express: app,
            cache: false
        });
        res.render(url,obj)
    }
    res.backend = (url,obj) => {
        nunjucks.configure('view/backend', {
            autoescape: false,
            express: app,
            cache: false
        });
        res.render(url,obj)
    }
    next();
});

// nunjucks.configure('views/frontend', {
//     autoescape: false,
//     express: app,
//     cache: false
// });
app.engine('html', nunjucks.render);
// console.log('zzzzzzzzzzzzzzzzzz'+nunjucks.render)
app.set('view engine','html');
//console.log(app.settings.views)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'techmaster',
    saveUninitialized: true,
    resave: true
}));

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
            value:value
        }
    }
}))

app.use(flash());
app.use((req, res, next) => {
    res.locals.messages = req.session.flash;
    delete req.session.flash;
    next();
})
    
// require('./routes/routes')(app,express);
app.use('/', routes);
    


app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            messages: err.messages,
            error : err
        })
    })
}
app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            messages: err.messages,
            error : {}
        })
    })

const port = 4000;
app.listen(port,() => {
    console.log('Ready for Get requests on localhost:'+ port);
})


// res.frontend.render()
// res.backend.render()