'use strict';

describe('eventThumbnail',function(){
	var el,stubShowDetails;
    
    beforeEach(module('eventsApp'));
    
    beforeEach(module('templates/directives/eventThumbnail.html'));

    beforeEach(inject(function($compile,$rootScope){
    	// set up scope
    	var scope = $rootScope;
    	stubShowDetails = sinon.stub();
    	scope.myShowDetails = stubShowDetails
    	scope.event = {	id:1,
    					name: "Event Name",
            			date: "223",
            			time: "456",
            			location: {
                					address: "789",
                					city: "10112",
                					province: "13"
                				}
                	};

         el = angular.element('<event-thumbnail event="event" show-details="myShowDetails(event)"/>');
         $compile(el)(scope);
         scope.$digest();
         //console.log(el[0].outerHTML)
    }));

	it('should bind the data',function(){
		expect(el.text()).toContain('Event Name')
	});

	it('should bind to the scope\'s event', function(){

		el.click();

		expect(stubShowDetails.called).toBe(true);


	});
 
});