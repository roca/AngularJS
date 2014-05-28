'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope,eventData){

		$scope.event = {};

		$scope.saveEvent = function(event,newEventForm) {
			console.log(newEventForm);
			if (newEventForm.$valid) {

	            eventData.save(event).$promise.then(
          			function(response){console.log('success',response);},
          			function(response){console.log('failure',response);}

        		);
    		}
	    };
		$scope.cancelEdit = function() {
            window.location = "/app/EventDetails.html"
        };
	}
);