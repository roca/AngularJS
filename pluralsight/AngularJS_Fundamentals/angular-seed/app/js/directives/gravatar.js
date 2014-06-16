
'use strict';

eventsApp.directive('gravatar',function(gravatarUrlBuilder) {
	return {
		restrict: 'E',
		replace:  true,
		template: '<img />',
		link: function(scope, element, attrs, controller) {
            attrs.$observe('email',function(value){
            	attrs.$set('src',gravatarUrlBuilder.buildGravatarUrl(value));
            });
        }
	};

});



