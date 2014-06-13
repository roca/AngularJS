'use strict';

eventsApp.directive('mySample',function($compile) {

	// return {
	// 	restrict: 'E',
	// 	link:  function(scope,element,attrs,controller){
	// 		var markup = "<input type='text' ng-model='sampleData' />{{sampleData}}<br/>";
	// 	    angular.element(element).html($compile(markup)(scope));
	// 	}
	// };
	return {
		restrict: 'C',
		template:   "<input type='text' ng-model='sampleData' />{{sampleData}}<br/>",
		scope: {
			
		}
		//templateUrl: 'templates/EventDetails.html'
		
	};

});
