var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

app.use(express.static(path.join(__dirname, 'views/html')));
app.use(express.static(path.join(__dirname, 'public')));

/* routes config */
var routes = require('./routes/index');
app.use('/', routes);
var user_routes = require('./routes/users');
app.use('/users', user_routes);

/* views config */
app.set('views', path.join(__dirname, 'views/html'));
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'html');

/* this was included on ./routes/index.js to render an html file.
app.get('/', function (request, response) {
  response.send('Hello World!');
});
*/

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