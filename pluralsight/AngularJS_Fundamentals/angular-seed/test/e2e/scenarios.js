'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('event registration app',function(){

	describe('events',function(){
         

         beforeEach(function(){
               browser().navigateTo('app/#/events');
               //pause();
         });

         it('should render the events page',function(){
         	//expect(browser().window().href()).toMatch('app/#/events');
         	expect(element('h1:first').text()).toMatch(/Events/);
         	expect(element('h2:first').text()).toMatch(/Angular Boot Camp/);
         });
	});

	describe('events',function(){
         beforeEach(function(){
               browser().navigateTo('app/#/event/1');
         });
	
        it('should sort sessions by name',function(){
         	expect(element('h4.well-title:first').text()).toMatch(/Directives Masterclass/);
          });

        it('should have 3 sessions',function(){
         	expect(repeater('.thumbnails li').count()).toBe(3);
          });

        it('should have 1 session when Introductory filter is chosen',function(){
        	select('query.level').option('introductory')
         	expect(repeater('.thumbnails li').count()).toBe(1);
          });

        it('should be sorted by vote after sort order is changed to sort by vote',function(){
        	select('sortorder').option('-upVoteCount')
         	expect(element('h4.well-title:first').text()).toMatch(/Scopes for fun and profit/);
          });

	});
});