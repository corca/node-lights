var exec = require('child_process').exec,
    child;
var sleep = require('sleep');

function codeSend (code) {
  console.log('Sending code: ' + code);
  child = exec('sudo ./helpers/codesend ' + code, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('Execution error: ' + error);
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
    }
  });
}

var executeCodes = function (codes) {
  if (codes) {
    for (var i = 0; i < codes.length; i++) {
      codeSend(codes[i]);
      sleep.usleep(500000);
    }
  }
};

module.exports.executeCodes = executeCodes;
