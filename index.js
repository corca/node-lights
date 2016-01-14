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
  var scenes = codegen.sceneGen(config.scenes,config.lights);
  var allOn = codegen.allCodes('on',config.lights);
  var allOff = codegen.allCodes('off',config.lights);
  
  res.render('index',{
    lights:config.lights,
    scenes:scenes,
    allOn:allOn,
    allOff:allOff
  });
});

app.post('/', function(req,res){
  var codeArray = [];
  for (var code in req.body.codes) {
    codeArray.push(req.body.codes[code]);
  }
  sender.executeCodes(codeArray);
  res.status(200).send("Received");
});

// app.get('/send/:id?', function (req, res) {
//   var code = req.params.id;
//   if (code === undefined) {
//     res.status(500).json({"Status":"Failed"});
//   } else {
//     var sendStatus = sender.executeCodes(code);
//     res.status(200).json({
//       "Status":"Success",
//       "Send Status":sendStatus
//     });
//   }
// });



app.listen(3000);
