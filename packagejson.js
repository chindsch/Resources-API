//# package.json created by running npm init. node_modules created by running npm install. Node modules #is where all of the dependencies go. Package.json manages the dependencies, scripts and keep track of all that is going on. Run npm install {dependency name like express or mongoose} --save to add dependencies to this package.json


{
  "name": "resources-api",
  "version": "1.0.0",
  "description": "a technical resources api",
  "main": "server.js",
  "dependencies": {
    "express": "^4.17.1", #sudo npm install express --save
    "mongoose": "^5.10.7" #npm install mongoose --save
  },
  "devDependencies": {},
  "scripts": {
    "test": "npm test",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC"
}
