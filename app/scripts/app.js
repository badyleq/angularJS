'use strict';

/**
 * @ngdoc overview
 * @name angularJs
 * @description
 * # angularJs
 *
 * Main module of the application.
 */
angular
  .module('angularJs', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) //inject:route
      .otherwise({
        redirectTo: '/'
      });
  });
