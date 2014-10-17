describe('expensesDataService',function(){



	beforeEach(module('app'));

	it('should have three expense items',inject(function(expensesDataService){
		expect(expensesDataService.getExpenses().length).toBe(3);
	}));

});