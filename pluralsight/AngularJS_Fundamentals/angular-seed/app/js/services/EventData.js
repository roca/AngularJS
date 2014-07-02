
eventsApp.factory('eventData',function($resource) {
  var resource = $resource('/app/data/event/:id.json',{id:'@id'});

  return {
    getEvent: function(eventId){
      //console.log(eventId);
        return resource.get({id:eventId});
    },
    save: function(event) {
      event.id = 999;
      return resource.save(event);
    },
    getAllEvents: function() {
      return [resource.get({id:1}),resource.get({id:2}),resource.get({id:3})];
    }

  };

});

// eventsApp.factory('eventData',function($http,$q) {
//   return {
//     getEvent: function(){
//       var deferred = $q.defer();

//       $http({method: 'GET', url: '/app/data/event/1.json'}).
//       success(function(data,status,headers,config){
//           deferred.resolve(data);
//       }).
//       error(function(data,status,header,config){
//           deferred.reject(status);
//       });

//       return deferred.promise;
//     }

//   };

// });

// eventsApp.factory('eventData',function() {

//     return {
//          event: {
//           	name: 'Angular Boot Camp',
//           	date: '1/1/2013',
//           	time: '10:30 am',
//           	location: {
//           		address: 'Google Headquarters',
//           		city: 'Mountain View',
//           		province: 'CA'
//           	},
//           	imageUrl: 'img/AngularJS-large.png',
//             sessions: [
//                 {
//                     name: 'Directives Masterclass introductory',
//                     creatorName: 'Bob Smith',
//                     duration: 1,
//                     level: 'Advanced',
//                     abstract: 'In this session you will learn the ins and outs of directives!',
//                     upVoteCount: 0


//                 },
//                 {
//                     name: 'Scopes for fun and profit',
//                     creatorName: 'John Doe',
//                     duration: 2,
//                     level: 'Introductory',
//                     abstract: 'In this session you will learn the ins and outs of directives',
//                     upVoteCount: 0
//                 },
//                 {
//                     name: 'Well Behaved Controllers',
//                     creatorName: 'Bob Smith',
//                     duration: 4,
//                     level: 'Intermediate',
//                     abstract: 'This session you take a closer look at scopes. Learn what they do, how they do it. and how to get them to do it.',
//                     upVoteCount: 0
//                 }
//             ]
//           }
//     };

// });