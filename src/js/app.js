var oclockApp = angular.module('oclockApp', ['ngRoute','ngAnimate','ngDialog']);
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
oclockApp.controller('OclockController',['$scope','$rootScope', 'ngDialog', function ($scope, $rootScope, ngDialog) {
  'use strict';
  $scope.clientHeure =0;
  $scope.clientMin =0;
  $scope.clock = $rootScope.clock;
  $scope.clock.init();
  $scope.state = $scope.clock.getState();

  $scope.addHour = function (){
    if ($scope.clientHeure+1 > 23){
      $scope.clientHeure = 0;
    }else {
      $scope.clientHeure = $scope.clientHeure +1;
    }
  };
  
  $scope.addMin = function (){
    if ($scope.clientMin+5 > 55){
      $scope.clientMin = 0;
    }else {
      $scope.clientMin = $scope.clientMin +5;
    }
  };
  $scope.sousHour = function (){
    if ($scope.clientHeure -1 < 0){
      $scope.clientHeure = 23;
    }else {
      $scope.clientHeure = $scope.clientHeure -1;
    }
    
  };
  
  $scope.sousMin = function (){
    if ($scope.clientMin -5 < 0){
      $scope.clientMin = 55;
    }else {
      $scope.clientMin = $scope.clientMin -5;
    }
  };

  $scope.check = function () {
    if($scope.clock.checkClock($scope.clientHeure, $scope.clientMin)){
      ngDialog.open({ template: 'partials/popupwin.html' });
    }else{
      ngDialog.open({ template: 'partials/popuploose.html' });
    }
  };
  console.log($scope.clock.getHeures());

}]);
oclockApp.controller('AcceuilController',['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.clock  = new Clock();
  
}]);

oclockApp.controller('OptionsController',['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.changeClock = function (name){
    $rootScope.clock.changeClock(name);
  };
}]);