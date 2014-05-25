'use strict';

eventsApp.controller('EventController',
	function EventController($scope, $sce){

        $scope.snippet = '<span style="color:red"> hi there</span>';
        $scope.deliberatelyTrustDangerousSnippet = function() {
            return $sce.trustAsHtml($scope.snippet);
         };

        $scope.boolValue = false;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = false
        $scope.sortorder = "name";

          $scope.event = {
          	name: 'Angular Boot Camp',
          	date: '1/1/2013',
          	time: '10:30 am',
          	location: {
          		address: 'Google Headquarters',
          		city: 'Mountain View',
          		province: 'CA'
          	},
          	imageUrl: 'img/AngularJS-large.png',
            sessions: [
                {
                    name: 'Directives Masterclass introductory',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0


                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'In this session you will learn the ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Bob Smith',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'This session you take a closer look at scopes. Learn what they do, how they do it. and how to get them to do it.',
                    upVoteCount: 0
                }
            ]
          }

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