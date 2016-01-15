function sceneGen (scenes,lights) {
  var finalScenes = {};
  for (var scene in scenes) {
    finalScenes[scene] = [];
    for (var light in lights) {
      if (scenes[scene].indexOf(light) >= 0) {
        finalScenes[scene].push(lights[light].on);
      } else {
        finalScenes[scene].push(lights[light].off);
      }
    }
  }
  return finalScenes;
}

function allCodes(onOff,lights) {
  if (onOff === 'on' || onOff === 'off') {
    var codes = [];
    for (var light in lights) {
      codes.push(lights[light][onOff]);
    }
    return codes;
  } else {
    return undefined;
  }
}

function codeArrayGen(codes){
  var codeArray = [];
  for (var code in codes) {
    codeArray.push(codes[code]);
  }
  return codeArray;
}

module.exports.sceneGen = sceneGen;
module.exports.allCodes = allCodes;
module.exports.codeArrayGen = codeArrayGen;
