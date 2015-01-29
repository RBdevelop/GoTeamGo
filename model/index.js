var Parse = require('parse').Parse;
var _ = require('lodash');
Parse.initialize("TyVuC28o9YsqX8Jj1x0xvjBW0kBZ48zLMKyTCnl7", "THcJBHXRamryDrEbKP5OPsAfpw8s8ESqgISm8Fob");

var api = require('../api');

exports.getTeams = function (callback){
	api.ncaaMensBBallRankings(function(err, results) {
		var teams = [];
		var team = {};
		for (var i = 0; i < results.rankings.length; i++) {
			var team = {
				sport: 'Basketball',
				league: 'Mens NCAA',
				id: results.rankings[i].id,
				name: results.rankings[i].name,
				market: results.rankings[i].market,
				rank: results.rankings[i].rank,
				wins: results.rankings[i].wins,
				losses: results.rankings[i].losses
			};
			teams.push(team);
		}
		return callback(null, teams);
	});
};
