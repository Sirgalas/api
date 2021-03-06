'use strict';

var config 		= require('../../config');
var Mongoose 	= require('mongoose');

var dbURI = "mongodb://" + 
encodeURIComponent(config.db.username) + ":" + 
encodeURIComponent(config.db.password) + "@" + 
config.db.host + ":" + 
config.db.port + "/" + 
config.db.name;

Mongoose.connect(dbURI, { useNewUrlParser: true });
// Throw an error if the connection fails
Mongoose.connection.on('error', function(err) {
    console.log(err);
	if(err) throw err;
});
Mongoose.Promise = global.Promise;
module.exports = { Mongoose, 
	models: {
		artist: require('./schemas/artist.js'),
		category: require('./schemas/category.js'),
	}
};