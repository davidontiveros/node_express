var express = require('express');
var router = express.Router();
var db = require('../db/db');
var assert = require('assert');

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 */

router.get('/', function(req, res) {

  // note: always use "db.get()" to actually get the db object to query.
  var query = {};
  var projection = {'_id': 0};
  var cursor = db.get().collection('persons').find(query);
  cursor.project(projection);
  cursor.toArray( function (err, docs) {
    assert.equal(err, null);

    res.json({
      users: docs
    });
  });


  /* this below was hardcoded dummy json to response
  var users = [];
  users.push({
    name: 'David',
    lastname: 'Ontiveros'
  });
  users.push({
    name: 'Juan',
    lastname: 'Perez'
  });

  res.json({
      users: users
  });
  */
});

module.exports = router;
