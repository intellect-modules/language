var _ = require("underscore");


var Main = function( options ){
	// prerequisites
	options = options || {};

	var self = this;

	// middleware
	return function(req, res, next){
		self.request( req, res );
		self.response( req, res );
		next();
	};

	return this;
}

Main.prototype = {

	// logic used to interpret a message
	request: function( req, res ){
		//
		//req.types.push("");

	},

	// logic used to filter the response
	response: function( req, res ){
		//if( req.types.indexOf("") == -1 ) return;
		// for simplicity assumming string is "clean"
		//res.results.language = "";
		// add tags
		//res.tags.push("");
	}

}

module.exports = function( options ){
	return new Main( options );
}