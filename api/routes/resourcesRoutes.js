//#The routes directory houses the routes for the api requests. Originally was in a server.js. 


'use strict'


module.exports = function(app) {
  let resources = require('../controllers/resourcesController');

  app.route('/resource')
    .get(resources.list_all_resources)
    .post(resources.create_a_resource);

  app.route('/resource/:resourceId')
    .get(resources.read_a_resource)
    .delete(resources.delete_a_resource);
};



// Get the function and run it out of controllers file
//#when the get request is made, respond with th resources.list_all_resources function from the controllers file.

//	  .post()
//	  .patch()
//	  .delete()



