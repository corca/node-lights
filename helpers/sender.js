var exec = require('child_process').exec,
    child;

var singleCode = function (code) {
  if (code) {
    child = exec('sudo ./helpers/codesend ' + code, function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
        return error;
      }
      console.log('stdout: ' + stdout + " || stderr: " + stderr);
      return {
        "stdout":stdout,
        "stderr":stderr
      };
    });
  }
};

module.exports.singleCode = singleCode;
