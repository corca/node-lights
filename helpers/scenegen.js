function sceneGen (scenes,lights) {
  // Initialize empty scene command object
  var finalScenes = {};

  for (var scene in scenes) {
    // Initialize empty code array for each scene
    finalScenes[scene] = [];
    scenes[scene].forEach(function(light){
      finalScenes[scene].push(lights[light].on);
    });
  }

  return finalScenes;
}

module.exports.sceneGen = sceneGen;
