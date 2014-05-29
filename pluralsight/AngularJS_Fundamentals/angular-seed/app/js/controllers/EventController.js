'use strict';

eventsApp.controller('EventController',
	function EventController($scope, $sce,eventData,$anchorScroll){

        $scope.snippet = '<span style="color:red"> hi there</span>';
        $scope.deliberatelyTrustDangerousSnippet = function() {
            return $sce.trustAsHtml($scope.snippet);
         };

        $scope.boolValue = false;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = false
        $scope.sortorder = "name";

        eventData.getEvent().$promise.then(
          function(event){$scope.event = event;console.log(event)},
          function(response){console.log(response);}

        );

        // eventData.getEvent().then(
        //   function(event){$scope.event = event;},
        //   function(statusCode){console.log(statusCode);}

        // );
          
        $scope.scrollToSession = function () {
          $anchorScroll();
        };

        $scope.toggleShowHide = function(session) {
            $scope.boolValue = !$scope.boolValue;
        };

          $scope.upVoteSession = function(session) {
                  session.upVoteCount++;
          };
          $scope.downVoteSession = function(session) {
               if (session.upVoteCount > 0) {
                  session.upVoteCount--;
              }
          };

});