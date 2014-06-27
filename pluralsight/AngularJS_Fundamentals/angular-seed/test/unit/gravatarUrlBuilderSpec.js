'use strict';

describe('gravatarUrlBuilder',function(){

    beforeEach(module('eventsApp'));

     it('should return the correct Gravatar url',inject(function(gravatarUrlBuilder){

     	expect(gravatarUrlBuilder.buildGravatarUrl('angulardemo@gmail.com'))
     	.toBe('http://www.gravatar.com/avatar/bbe8276fdb487d3af34b352de60bc721.jpg?s=200&r=g');

     }))

});