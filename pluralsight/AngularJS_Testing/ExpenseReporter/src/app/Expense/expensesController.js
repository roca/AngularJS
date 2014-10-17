(function(){
	'use strict'

	angular.module('app')
		.controller('expensesController',[expensesController]);


		function expensesController(){

			var vm = this;

			vm.getExpenses = getExpenses;
			vm.expenseItems = getExpenses();

			

			function getExpenses(){

				return  [{title:'Taxi',  	description: 'To airport', amount: 89.95},
						{title:'Lunch', 	description: 'At airport', amount: 15.40},
						{title:'Coffee',  	description: 'starbucks',  amount: 4.93}];

			};

		};
})();