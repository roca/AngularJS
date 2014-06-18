'use strict';


eventsApp.controller('GreetingController',
	function GreetingController($scope){
		var greetings = ['hello'];
		$scope.sayHello = function () {
				alert(greetings.join());
		};
		this.addGreeting = function(greeting){
              greetings.push(greeting);
		};
	});


eventsApp.directive('greeting',function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
		//controller: '@',
		//name: 'ctrl'
		controller: 'GreetingController'
		// controller: function($scope) {
		// 	$scope.sayHello = function () {
		// 		alert('Hello');
		// 	}
		// }
		
		
	};

}).directive('finish',function() {
	return {
		restrict: 'A',
		require: 'greeting',
		link: function(scope, element, attrs, controller){
			controller.addGreeting('hei');
		}
	};

}).directive('hindi',function() {
	return {
		restrict: 'A',
		require: 'greeting',
		link: function(scope, element, attrs, controller){
			controller.addGreeting('nemisti');
		}
		
	};

});

