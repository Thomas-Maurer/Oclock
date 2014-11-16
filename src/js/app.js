var oclockApp = angular.module('oclockApp', ['ngRoute','ngAnimate']);
oclockApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
        .when('/game', {
          templateUrl: 'partials/game.html',
          controller: 'OclockController',
          controllerAs: 'OclockController'
        })
        .when('/', {
          templateUrl: 'partials/home.html',
          controller: 'AcceuilController',
          controllerAs: 'AcceuilController'
        })
        .when('/home', {
          templateUrl: 'partials/home.html',
          controller: 'AcceuilController',
          controllerAs: 'AcceuilController'
        })
        .when('/options', {
          templateUrl: 'partials/options.html',
          controller: 'OptionsController',
          controllerAs: 'OptionsController'
        })
        .otherwise({
        redirect: '/'
    });
        $locationProvider.html5Mode(true);
}]);
oclockApp.controller('OclockController',['$scope', function ($scope) {
  'use strict';
  var stage = new Kinetic.Stage({
    container: 'game',
    width: 800,
    height: 800,
    });
  var layer = new Kinetic.Layer();
  stage.add(layer);
  var img = new Image();
  img.src = 'css/asset/' + $scope.clock.adresse + '.png';
  img.onload = function () {
      var imgclock = new Kinetic.Image({
        width: 250,
        height: 250,
        image: img,
        draggable: true
      });
   // add the shape to the layer
    layer.add(imgclock);
    layer.draw();
  };
}]);
oclockApp.controller('AcceuilController',['$scope', '$rootScope', function ($scope, $rootScope) {
  if (angular.isDefined($rootScope.clock)) {
    // variable is defined
    $scope.clock = $rootScope.clock;
  };
}]);
oclockApp.controller('OptionsController',['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.clock = {
    adresse: "clock1",
    heure: "",
    minutes: ""
  };
  $scope.changeClock = function (name){
    $rootScope.clock.adresse = name;
  };
}]);