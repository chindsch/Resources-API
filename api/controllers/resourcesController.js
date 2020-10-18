//#The controllers directory houses the endpoint functionalities. The actions when the api endpoint hit. where the business logic goes

'use strict';

var mongoose =  require('mongoose'),
	Resource = mongoose.model('Resources');

//This function grabs all resources in the database using the mongoose find method
exports.list_all_resources = function(req,res) {
  Resource.find({},function(err,resource){
	if (err)
	  res.send(err):
	res.json(resource);
	});
};

