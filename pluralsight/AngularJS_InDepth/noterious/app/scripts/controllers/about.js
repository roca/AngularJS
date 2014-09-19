'use strict';

/**
 * @ngdoc function
 * @name noteriousApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the noteriousApp
 */
angular.module('noteriousApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
