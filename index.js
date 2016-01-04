'use strict';

var express = require('express');
var config = require('configure');
var sender = require('./helpers/sender.js');

var app = express();

app.get('/send/:id', function (req, res) {
  if (req.params.id) {
    sender.singleCode(req.params.id);
  }
  res.send("Code sent: " + req.params.id);
});

app.listen(3000);
