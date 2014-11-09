describe('platesController',function(){

	var $controllerConstructor;
	var scope;


	beforeEach(module('app'));

	beforeEach(inject(function($controller,$rootScope){

		$controllerConstructor = $controller;
		scope = $rootScope.$new();

	}));

	it('should have three plate items',function(){
		var ctrl = $controllerConstructor('platesController',{$scope: scope});
		expect(ctrl.plateItems.length).toBe(3);
	})

});