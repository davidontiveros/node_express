var express = require('express');
var router = express.Router();

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 */

router.get('/', function(req, res, next) {
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
});

module.exports = router;
