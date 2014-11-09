(function(){
	'use strict'

	angular.module('app')
		.factory('platesDataService',['$http',platesDataService]);


		function platesDataService($http){
			var service = {
				getPlates: getPlates,
				persistPlates: persistPlates
			};
			return service;
			function getPlates(){

				return  [
						new PlateItem('Taxi',		'To airport',	89.95),
						new PlateItem('Lunch',	'At airport',	15.40),
						new PlateItem('Coffee',	'starbucks',	4.93)
				]

			}

			function reportPlates() {
				// some work
			}

			function persistPlates(reportPlates) {
				//do some work
				var success = true;
				if(success){
					reportPlates();
				}
			}

		}
})();