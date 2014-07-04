'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('event registration app',function(){

	describe('events',function(){
         

         beforeEach(function(){
               browser().navigateTo('/#/events');
         });

         it('should render the events page',function(){
         	expect(element('h1:first').text()).toMatch(/Events/);
         	//expect(element('h2:first').text()).toMatch(/Angular Code Camp/);
         });
	});

});