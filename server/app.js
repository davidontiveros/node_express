var express = require('express');
var path = require('path');
var http = require('http');
//var MongoClient = require('mongodb').MongoClient;
var app = express();

app.use(express.static(path.join(__dirname, '../app/views')));
app.use(express.static(path.join(__dirname, '../app')));

/* routes config */
var routes = require('./routes/index');
app.use('/', routes);

/* views config */
app.set('views', path.join(__dirname, '../app/views'));
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'html');

/*
 Connect to mongodb, if connection successful
 then users url will be available.
*/
var db = require('./db/db');

db.connect("mongodb://localhost:27017/app", function() {

  var user_routes = require('./routes/users');
  app.use('/users', user_routes);
 /*
 mongoClient.connect("mongodb://localhost:27017/persons", function(err, db) {

 if (err) throw err;

 console.log("Successfully connected to MongoDB.");

 var user_routes = require('./routes/users');
 app.use('/users', user_routes);

 */
});


/* Port & Server configuration */
var port = 89;
app.set('port', port);
var server = http.createServer(app);
// listen on provided port
server.listen(app.get('port'), function() {
  console.log('server up and running on port: '+port);
});
//server.on('error', onError);
//server.on('listening', onListening);