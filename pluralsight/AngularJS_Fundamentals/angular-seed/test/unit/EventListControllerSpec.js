'user strict';

describe('EventListController',function() {
      var scope,$controllerConstructor;

      beforeEach(module('eventsApp'));

      beforeEach(inject(function($controller,$rootScope){
      	    scope = $rootScope.$new();
      	    mockEventsData = sinon.stub({getAllEvents: function(){}});
      		$controllerConstructor = $controller;
      }));

      
      it('should set the scope events to the result of eventData.getAllEvents', function(){
      	 var mockEvents={};
      	 var ctrl = $controllerConstructor('EventListController',
      	 	{$scope:scope,$location:{},eventData:{}});

      	 expect(scope.events).toBe(mockEvents);
      })

})