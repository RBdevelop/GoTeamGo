var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 5000;

var routes = require('./routes');
var model = require('./model');

//api routes
app.get('/', routes.getPlaces);
app.get('/api/1/restdoc', routes.restdoc);
app.get('/api/1/getTeams/', routes.getTeams);
app.get('/api/1/getPlaces/', routes.getPlaces);

http.listen(port, function(){
	console.log('listening on localhost:' + port);
});
