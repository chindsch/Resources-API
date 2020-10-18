//#The routes directory houses the routes for the api requests. Originally was in a server.js. 


'use strict'



module.export = function(app) {
	let resources = require('../controllers/resourcesControllers'):

// Get the function and run it out of controllers file
	app.route('/resource')
	  .get(resources.list_all_resources) //#when the get request is made, respond with th resources.list_all_resources function from the controllers file.
	  .post()
	  .patch()
	  .delete()
}


