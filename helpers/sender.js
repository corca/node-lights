var exec = require('child_process').exec,
    child;
var sleep = require('sleep');

function codeSend (code) {
  child = exec('sudo ./helpers/codesend ' + code, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    console.log('stdout: ' + stdout + " || stderr: " + stderr);
  });
}

var executeCodes = function (codes) {
  if (codes) {
    for (var i = 0; i < codes.length; i++) {
      codeSend(code);
      sleep(0.1);
    }
  }
};

module.exports.executeCodes = executeCodes;
