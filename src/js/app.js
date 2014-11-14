var oclockApp = angular.module('oclockApp', []);
oclockApp.controller('OclockController', function ($scope) {
  'use strict';
  var clock = {
    adresse: "clock1",
    heure: "",
    minutes: ""
  };
  var stage = new Kinetic.Stage({
    container: 'game',
    width: 800,
    height: 800,
    });
  var layer = new Kinetic.Layer();
  stage.add(layer);
  var img = new Image();
  img.src = 'css/asset/' + clock.adresse + '.png';
  img.onload = function () {
      clock = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 251,
        height: 231,
        image: img
      });

   // add the shape to the layer
    layer.add(clock);
    layer.draw();
  };
});
