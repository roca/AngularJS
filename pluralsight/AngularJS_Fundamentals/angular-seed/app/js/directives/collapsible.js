'use strict';



eventsApp.directive('collapsible',function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div ng-click="toggleVisibility()"><h4 class="well-title" >{{title}}</h4><div ng-hide="visible">more info...</div><div ng-show="visible" ng-transclude/></div>',
		transclude: true,
  		scope: {
  			title: '@'
  		},
		controller: function($scope) {

			$scope.visible = false;
			$scope.toggleVisibility = function () {
				$scope.visible = !$scope.visible;
			}
		}
		
	}	
});