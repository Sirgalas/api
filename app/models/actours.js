'use strict';

var actoursModel   = require('../database').models.actours;
//var User 		= require('../models/user');

var create = function (data, callback){
	var newActours = new actoursModel(data);
	newActours.save(callback);
};

var find = function (data, callback){
	actoursModel.find(data, callback);
};

var findOne = function (data, callback){
	actoursModel.findOne(data, callback);
};

var findById = function (id, callback){
	actoursModel.findById(id, callback);
};


module.exports = { 
	create, 
	find, 
	findOne, 
	findById, 

};