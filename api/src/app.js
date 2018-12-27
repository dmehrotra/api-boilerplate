// The usual suspects
var express = require('express'); 
var path = require('path');


// I put all available routes in index file
var routes = require('./routes/all_routes'); 

var app = express();

// set up view engine setup just in case. 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));



// I forgot wht this is necessary, perhaps we don't need it

//for namespacing routes 
app.use('/', routes); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.setHeader('Access-Control-Allow-Origin','*');
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
