var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var port = process.env.PORT || 5000;

var routes = require('./routes');
var model = require('./model');

//api routes
app.get('/api/1/restdoc', routes.restdoc);

http.listen(port, function(){
	console.log('listening on localhost:' + port);
});
