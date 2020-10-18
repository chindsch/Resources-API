//#The models folder houses the structure and the setup for connecting to the database. The structure/scaffolding/schema of what the data in the mongoDB database should look like.

'use strict';

let mongoose = require('mongoose'); //#set up the mongoose package
let Schema = mongoose.Schema;

//This creates a schema for the structure of the data in MongoDB. It sets up the fields and their types to be used when entering and extracting data. 


let ResourceSchema = new Schema({
	name:{
	  type: String,
	  required: 'Please enter a name for your resource'
	},
	url: {
	  type: String,
	  required: 'Please enter a valid URL for your resource'
	},
	skill: {
	  type:[{
	    type: String,
	    enum: ['beginner','intermediate','advanced']
	  }],
	  required: 'Please enter a skill level of beginner, intermediate, or advanced'
	}})

module.export = mongoose.model('Resources',ResourceSchema)      // #method in mongoose to build schema in the database. Application would set up this schema, do not need this set up in the database already
