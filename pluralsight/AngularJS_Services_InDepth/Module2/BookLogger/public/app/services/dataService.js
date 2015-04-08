(function () {
	angular.module('app')
	.factory('dataService',dataService);

	function dataService(logger,$q,$timeout) {

		return {
			getAllBooks: getAllBooks,
			getAllReaders: getAllReaders
		};

		function getAllBooks () {

			logger.output('getting all books');

			var booksArray = [
				{
					book_id: 1,
					title: 'Harry Potter and the Deathly Hallows',
					author: 'J.K. Rowling',
					year_published: 2000
				},
				{
					book_id: 2,
					title: 'The Cat in the Hat',
					author: 'Dr. Seuss',
					year_published: 1957
				},
				{
					book_id: 3,
					title: 'Encyclopedia Brown, boy Detective',
					author: 'Donald J. Sobol',
					year_published: 1963
				}
			];

			var deferred = $q.defer();

			$timeout(function() {

				var successful = true;
				if (successful) {

					deferred.notify("Just getting started gathering books...");
					deferred.notify("Almost done gathering books...");

						deferred.resolve(booksArray);
				} else{
						deferred.reject("Error retrieving books.");
				};

			}, 1000);

			return deferred.promise;
		}

		function getAllReaders () {

			logger.output('getting all readers');

			var readersArray = [
				{
					reader_id: 1,
					name: 'Mary',
					weeklyReadingGoal: 31,
					totalMinutesRead: 5600
				},
				{
					reader_id: 2,
					name: 'Daniel',
					weeklyReadingGoal: 210,
					totalMinutesRead: 3000
				},
				{
					reader_id: 3,
					name: 'Lanier',
					weeklyReadingGoal: 140,
					totalMinutesRead: 600
				}
			];

			var deferred = $q.defer();

			$timeout(function() {

				deferred.resolve(readersArray);

			}, 1500);

			return deferred.promise;

		}
	}

     dataService.$inject(['logger','$q','$timeout']);

}());