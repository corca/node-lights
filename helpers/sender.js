var exec = require('child_process').exec,
    child;

var singleCode = function (code) {
  if (code) {
    code.forEach(function(code){
      child = exec('sudo ./helpers/codesend ' + code, function (error, stdout, stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
        }
        console.log('stdout: ' + stdout + " || stderr: " + stderr);
      });
    });
  }
};

module.exports.singleCode = singleCode;
