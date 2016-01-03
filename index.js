'use strict';

var express = require('express');
var config = require('configure');

for (var light in config.lights) {
  console.log(light + " || On: " + config.lights[light].on + " || Off: " + config.lights[light].off);
}
