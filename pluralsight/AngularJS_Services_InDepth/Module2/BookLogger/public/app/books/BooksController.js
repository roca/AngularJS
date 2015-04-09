(function() {

    angular.module('app')
        .controller('BooksController', ['books','dataService','logger','badgeService','$q',BooksController]);


    function BooksController(books,dataService,logger,badgeService,$q) {

        var vm = this;

        vm.appName = books.appName;

        var booksPromise = dataService.getAllBooks();
        var readersPromise = dataService.getAllReaders();

        $q.all([booksPromise,readersPromise])
        .then(getAllDataSuccess)
        .catch(getAllDataError);

        function getAllDataSuccess(dataArray) {
            vm.allBooks = dataArray[0];
            vm.allReaders = dataArray[1];
        }

        function getAllDataError (reason) {
            console.log(reason);
        }


       //  dataService.getAllBooks()
       //      .then(getBooksSuccess,null,getBooksNotifications)
       //      .catch(errorCallBack)
       //      .finally(getAllBooksComplete);


       //  function getBooksSuccess (books) {
       //      //throw('error in the success handler')
       //      vm.allBooks = books;
       //  }

       //  // function getBooksError (reason) {
       //  //     console.log(reason);
       //  // }

       // function errorCallBack(errorMsg) {
       //      console.log('Error Message: ' + errorMsg);
       //  }

       //  function getBooksNotifications (notification) {
       //      console.log('Promise Notification: ' + notification);
       //  }

       //  function getAllBooksComplete () {
       //      console.log('getAllBooks has completed');
       //  }



       //  dataService.getAllReaders()
       //      .then(getAllReadersSuccess)
       //      .catch(errorCallBack)
       //      .finally(getAllReadersComplete);

       //  function getAllReadersSuccess(readers) {
       //      vm.allReaders = readers;
       //  }

       //  function getAllReadersComplete () {
       //      console.log('getAllReaders has completed');
       //  }

        vm.getBadge = badgeService.retrieveBadge;

        logger.output('BooksController has been created.');

    }


}());