(function() {

    var app = angular.module('app', ['ngRoute']);

    app.provider('books',['constants',function(constants){
            this.$get = function(){
            	var appName = constants.APP_TITLE;
            	var appDesc = constants.APP_DESCRIPTION;

            	var version = constants.APP_VERSION;

            	if (includeVersionInTitle){
            		appName += ' ' + version;
            	}
            	return {
            		appName: appName,
            		appDesc: appDesc
            	};
            };

            var includeVersionInTitle = false;
            this.setIncludeVersionInTitle = function(value){
            	includeVersionInTitle = value;
            };
    	}]);

    app.config(['booksProvider','constants','dataServiceProvider','$routeProvider',function(booksProvider,constants,dataServiceProvider,$routeProvider){
    		booksProvider.setIncludeVersionInTitle(true);
            console.log('title from constants service: ' + constants.APP_TITLE);
            console.log(dataServiceProvider.$get);


            $routeProvider
                .when('/',{
                    templateUrl: '/app/templates/books.html',
                    controller: 'BooksController',
                    controllerAs: 'books'
                })
                .when('/AddBook',{
                    templateUrl: '/app/templates/addBook.html',
                    controller: 'AddBookController',
                    controllerAs: 'addBook'

                })
                .when('/EditBook/:bookID',{
                    templateUrl: '/app/templates/editBook.html',
                    controller: 'EditBookController',
                    controllerAs: 'bookEditor'

                })
                .otherwise('/');

    }]);

}());