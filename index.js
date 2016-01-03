'use strict';

var express = require('express');
var config = require('configure');
var send = require('./helpers/send.js');

var app = express();

app.get('/', function (req, res) {
  var lightList = "";
  for (var light in config.lights) {
    lightList += "<h6>" + light + "</h6>";
    lightList += "<p>On: " + config.lights[light].on + "</p>";
    lightList += "<p>Off: " + config.lights[light].off + "</p>";
  }
  res.send(lightList);
});

app.listen(3000);
