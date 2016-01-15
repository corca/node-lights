'use strict';

var express = require('express');
var config = require('configure');
var bodyParser = require('body-parser');

var sender = require('./helpers/sender.js');
var codegen = require('./helpers/codegen.js');

var app = express();

app.use('/static',express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('view engine','jade');
app.set('views','./views');

app.get('/', function(req,res){
  res.render('index',{
    lights:config.lights,
    scenes:codegen.sceneGen(config.scenes,config.lights),
    allOn:codegen.allCodes('on',config.lights),
    allOff:codegen.allCodes('off',config.lights)
  });
});

app.post('/', function(req,res){
  sender.executeCodes(codegen.codeArrayGen(req.body.codes));
  res.status(200).send("Received");
});

app.listen(3000);
