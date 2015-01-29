var Parse= require('parse').Parse;
var _ = require('lodash');
Parse.initialize("TyVuC28o9YsqX8Jj1x0xvjBW0kBZ48zLMKyTCnl7", "THcJBHXRamryDrEbKP5OPsAfpw8s8ESqgISm8Fob");

var api = require('../api');

exports.getTeams = function (callback){
	api.ncaaMensBBallRankings(function(err, results) {
		return results;
	});
};
