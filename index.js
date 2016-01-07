'use strict';

var express = require('express');
var config = require('configure');
//var jade = require('jade');
var sender = require('./helpers/sender.js');

var app = express();

app.use('/static',express.static(__dirname + '/public'));

app.set('view engine','jade');
app.set('views','./views');

app.get('/', function(req,res){
  //res.send(typeof config.lights);
  res.render('index',{lights:config.lights});
});

app.get('/send/:id?', function (req, res) {
  var code = req.params.id;
  if (code === undefined) {
    res.status(500).json({"Status":"Failed"});
  } else {
    //var sendStatus = sender.singleCode(code);
    res.status(200).json({"Status":"Success"});
  }
});

app.listen(3000);
