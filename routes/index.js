var express = require('express');
var router = express.Router();
var fs = require("fs");
const Store = require('data-store');
const store = new Store({ path: 'temp.json' });


router.post('/', function(req, res, next) {
  var string = req.body.string;

  store.set(string, string);

  res.status(200).send();
});

module.exports = router;
