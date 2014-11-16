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
oclockApp.controller('OclockController',['$scope','$rootScope', function ($scope, $rootScope) {
  'use strict';

  $rootScope.clock.init();
  
}]);
oclockApp.controller('AcceuilController',['$scope', '$rootScope', function ($scope, $rootScope) {
  if (angular.isDefined($rootScope.clock)) {
    //var define
  }else{
    $rootScope.clock={};
    $rootScope.clock  = new Clock();
  };

}]);
oclockApp.controller('OptionsController',['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.changeClock = function (name){
    $rootScope.clock  = new Clock();
    $rootScope.clock.changeClock(name);
  };
}]);