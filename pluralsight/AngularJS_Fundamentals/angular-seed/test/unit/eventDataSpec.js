'use strict';

describe('eventData',function(){

	var mockEventResource;

    beforeEach(module('eventsApp'));

     describe('get',function(){

	    it("should issue a GET request to '/app/data/event/1.json' when the id is 1",inject(function(eventData,$httpBackend){
                $httpBackend.when('GET','/app/data/event/1.json').respond({name:"Angular Boot Camp"});
	             var result = eventData.getEvent(1);
                 $httpBackend.flush();
	             expect(result.name).toBe("Angular Boot Camp");

	     }))

 	 })

});