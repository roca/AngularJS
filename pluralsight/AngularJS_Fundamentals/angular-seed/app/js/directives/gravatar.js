
'use strict';

eventsApp.directive('gravatar',function(gravatarUrlBuilder) {
	return {
		restrict: 'E',
		replace:  true
		template: '<img ng-src="{{getGravatarUrl(user.emailAddress)}}"/>',
		link: function(scope, element, attrs, controller) {
            attrs.$observe('email',function(oldValue,newValue){
            	if (oldValue !== newValue) {
            		attrs.$set('src',getGravatarUrl(newValue));
            	}
            });
        }
	};

});

// <img ng-src="{{getGravatarUrl(user.emailAddress)}}"/>


