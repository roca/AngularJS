'use strict';

eventsApp.controller('EventController',
	function EventController($scope, $sce,eventData){

        $scope.snippet = '<span style="color:red"> hi there</span>';
        $scope.deliberatelyTrustDangerousSnippet = function() {
            return $sce.trustAsHtml($scope.snippet);
         };

        $scope.boolValue = false;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = false
        $scope.sortorder = "name";

          $scope.event = eventData.event;

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