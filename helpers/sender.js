var exec = require('child_process').exec,
    child;

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
    codes.forEach(function(code){
      codeSend(code);
    });
  }
};

module.exports.executeCodes = executeCodes;
