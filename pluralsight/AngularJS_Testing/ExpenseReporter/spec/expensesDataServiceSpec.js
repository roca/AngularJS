describe('expensesDataService',function(){



	beforeEach(module('app'));

	beforeEach(function() {
		jasmine.addMatchers(customMatchers);
	});

	it('should return three expense items',inject(function(expensesDataService){
		expect(expensesDataService.getExpenses().length).toBe(3);
	}));

	it('should return a taxi expense',inject(function(expensesDataService){
		var expenseItems = expensesDataService.getExpenses();
		var testExpenseItem = new ExpenseItem('Taxi',		'To airport',	89.95);
		expect(expenseItems).toContain(testExpenseItem);
	}));


	it('taxi should be a reasonable expense',function(){
		var taxi = new ExpenseItem('Taxi',		'To airport',	89.95);
		expect(taxi).toBeAReasonableExpense();
	});

});