describe('platesDataService',function(){



	beforeEach(module('app'));


	it('should return three plate items',inject(function(platesDataService){
		expect(platesDataService.getPlates().length).toBe(3);
	}));

	it('should return a taxi plate',inject(function(platesDataService){
		var plateItems = platesDataService.getPlates();
		var testPlateItem = new PlateItem('Taxi',		'To airport',	89.95);
		expect(plateItems).toContain(testPlateItem);
	}));

    describe('reasonable plates',function() {
    	var taxi;
    	var dinner;

		beforeEach(function() {
			jasmine.addMatchers(customMatchers);
		});

		beforeEach(function() {
			taxi   = new PlateItem('Taxi',  'To airport',               89.95);
			dinner = new PlateItem('Dinner','Dinner with John an Ward',189.95);
		});

		it('taxi should be a reasonable plate',function(){
			expect(taxi).toBeAReasonablePlate();
		});

		it('dinner should not be a reasonable plate',function(){
			expect(dinner).not.toBeAReasonablePlate();
		});
    });


});