//App setup for required modules
var express = require('express');
var path = require('path');
var apiRoute = require('./routes/ApiController');

var app = express();

//setup static html
app.use(express.static(path.join(__dirname, 'public')));

//setup route to handle requests
app.use('/', apiRoute);

//listen on port 3000 for requests
app.listen(5000);

module.exports = app;