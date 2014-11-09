'use strict'

describe("persisting plates", function() {

	beforeEach(module('app'));
    

  describe("call backs", function() {

  	it("should call back when persisted", inject(function(platesDataService) {

  		var spyCallBack = jasmine.createSpy('callBackSpy');
  		platesDataService.persistPlates(spyCallBack);
  		expect(spyCallBack).toHaveBeenCalled();
  		
  	}));
  	
  });

  describe("spy on", function() {

    it("should spy on persistPlates", inject(function(platesDataService) {

      var spy = spyOn(platesDataService,'persistPlates');
      platesDataService.persistPlates();
      expect(spy).toHaveBeenCalled();      
    }));


    it("should spy on persistPlates and fake a reply", inject(function(platesDataService) {
      var spy = spyOn(platesDataService,'persistPlates').and.callFake(function() {
        return 3;
      });
      var numRecordsPersisted = platesDataService.persistPlates();
      expect(numRecordsPersisted).toEqual(3);      
      
    }));
    
  });
	
});

