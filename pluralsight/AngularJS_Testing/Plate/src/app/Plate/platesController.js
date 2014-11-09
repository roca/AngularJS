(function(){
	'use strict'

	angular.module('app')
		.controller('platesController',['platesDataService',platesController]);


		function platesController(platesDataService){

			var vm = this;
			vm.plateItems = platesDataService.getPlates();

			
		};
})();