'use strict';

/**
 * @ngdoc function
 * @name angularJs.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of angularJs
 */
angular.module('angularJs')
  .controller('MainCtrl', function($scope) {
    $scope.tasks = [
      'view',
      'controller',
      'route',
      'directive',
      'filter',
      'service',
      'factory',
      'constant'
    ];
  });
