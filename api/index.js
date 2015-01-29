var request = require('superagent');

exports.ncaaMensBBallRankings = function(callback) {
	request
		.get('http://api.sportsdatallc.org/ncaamb-t3/polls/rpi/2014/rankings.json?api_key=avd7pd8f83y3c7qcs5yc6xev')
		.end(function(error, results){
			return callback(null, JSON.parse(results.text));
		});
};
