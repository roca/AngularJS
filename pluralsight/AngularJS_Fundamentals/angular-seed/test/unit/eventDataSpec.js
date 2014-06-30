'use strict';

describe('eventData',function($resource){

	var mockEventResource;

    beforeEach(module('eventsApp'));

     beforeEach(function(){
     	mockEventResource = sinon.stub({get: function(){}});
     	module(function($provide){
     		$provide.value($resource,mockEventResource);

     	})
    })

     describe('getEvent',function(){

	    it('should return the correct Event data',inject(function(eventData){
	             eventData.getEvent(2);
	             expect(mockEventResource.get.args[0][0].toEqual({name:"Angular Boot Camp"}));

	     }))

 	 })

});