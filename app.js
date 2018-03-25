var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require('handlebars');
var xhb  = require('express-handlebars');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var index = require('./routes/index');
var admin = require('./routes/admin');
var banner = require('./routes/banner');
var facts = require('./routes/facts');
var stats = require('./routes/stats');
var myths = require('./routes/myths');
var events = require('./routes/events');
var video = require('./routes/video');
var login = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', xhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use(session({
  name: 'session',
  key: 'user_sid',
  secret: 'donate',
  resave: false,
  saveUninitialized: false,
  maxAge: 10000,
  cookie: {
    username: ''
  },
  store: new FileStore()
}));

// // This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.username) {
//         res.clearCookie('user_sid');
//     }
//     next();
// });
//
// middleware function to check for logged-in users
// var sessionChecker = (req, res, next) => {
//     if (req.session.validation) {
//         console.log(req.session.validation);
//         // console.log(req.session.username +" "+ req.cookies.user_sid);
//         next();
//         console.log(req.session.cookie.user);
//         return;
//     } else {
//         // next();
//         res.redirect('/login');
//     }
// };

app.use('/', index);
app.use('/admin/', admin);
app.use('/banner', banner);
app.use('/facts', facts);
app.use('/stats', stats);
app.use('/myths', myths);
app.use('/events', events);
app.use('/video', video);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
  console.log('running on port 3000...');
});
