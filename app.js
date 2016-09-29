var express = require('express');
var path = require('path');
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

/* port config */
app.listen(89, function () {
  console.log('server up and running ...');
});