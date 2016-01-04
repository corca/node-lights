var exec = require('child_process').exec,
    child;

var singleCode = function (code) {
  if (code) {
    child = exec('sudo ./helpers/codesend ' + code, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  }
};

var multiCode = function (codes) {
  if (codes) {
    codes.forEach(function(code){
      singleCode(code);
    });
  }
};

module.exports.singleCode = singleCode;
