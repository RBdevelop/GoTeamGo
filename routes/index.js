var model = require('../model');

exports.restdoc = function(req, res) {
	var doc = {
		'goteamgo-api' : [
			{
				'version' : '1',
				'routes' : [
					{
						'getTeams' : 'api/1/getTeams',
						'returns' : 'list of teams'
					}
				]
			}
		]
	};
	res.json(doc);
};

exports.getTeams = function(req, res) {
	model.getTeams(function(err, results) {
		res.json(results);
	});
};
