'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope){
		$scope.saveEvent = function(event,newEventForm) {
			console.log(newEventForm);
			if (newEventForm.$valid) {
	            alert("" + event.name);
    		}
	    };
		$scope.cancelEdit = function() {
            window.location = "/app/EventDetails.html"
        };
	}
);