'use strict';

/**
 * @ngdoc function
 * @name noteriousApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noteriousApp
 */
angular.module('noteriousApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
