function sceneGen (scenes,lights) {
  // Initialize empty scene command object
  var finalScenes = {};
  // Iterate over each scene in scenes object
  for (var scene in scenes) {
    // Break lights array into separate variable
    var sceneLightsArray = scenes[scene];
    // Initialize empty code array for each scene
    finalScenes[scene] = [];
    // Iterate over each light in lights object
    for (var light in lights) {
      // Check if light exists in light name array for scene
      // If light exists, add ON code to array
      if (sceneLightsArray.indexOf(light) >= 0) {
        finalScenes[scene].push(lights[light].on);
      // If light does not exist add OFF code to array
      } else {
        finalScenes[scene].push(lights[light].off);
      }
    }
  }
  // Return final scenes object with light code arrays for each scene
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

module.exports.sceneGen = sceneGen;
module.exports.allCodes = allCodes;
