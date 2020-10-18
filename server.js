const express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Resource = require('./api/models/resourcesModels'),
	bodyParser = require('body-parser')

//Connecting to mongoose boiler plate to allow to connect to mongoDB database when we are ready
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ResourcesDb');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/resourcesRoutes');
routes(app);


 //registering the routes with the app instance instead of listing out all routes




app.listen(port);

console.log('This app is now listening on port' + port)


/* This is initially needed before the routes were moved to the routes folder
#app.get('/', function (req, res) {
  res.send('Hello World')
})
app.put('/', function (req, res) {
  res.send('Hello World')
})
*/
app.post('/', function (req, res) {
  res.send('You posted something here')
})
app.delete('/', function (req, res) {
  res.send('You deleted something')
})
app.patch('/', function (req, res) {
  res.send('You patched something')
}) 
app.listen(3000)
