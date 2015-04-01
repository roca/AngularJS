(function () {
	angular.module('app')
	.factory('dataService',dataService);

	function dataService() {

		return {
			getAllBooks: getAllBooks,
			getAllReaders: getAllReaders
		};

		function getAllBooks () {
			return [
				{
					book_id: 1,
					title
				},
			];
		}
	}
}());