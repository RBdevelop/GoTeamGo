var model = require('../model');

exports.restdoc = function(req, res) {
  res.send('Test');
};

exports.getTeams = function(req, res) {
	model.getTeams(function(err, results) {
		res.send(results);
	});
};