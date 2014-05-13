'use strict';

eventsApp.controller('EventController',
	function EventController($scope){

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
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!'


                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'In this session you will learn the ins and outs of directives'
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Bob Smith',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'This session you take a closer look at scopes. Learn what they do, how they do it. and how to get them to do it.'
                }
            ]
          }

});