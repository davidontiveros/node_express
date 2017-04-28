/**
 * Created by daviD on 15/04/2017.
 */
define(['app','angular-mocks'], function(app) {

    describe('HomeController Test', function () {

        var controller, scope;

        beforeEach(module('app'));

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('HomeController', {$scope:scope});
        }));

        it('should load the scope', function () {
            dump(scope.testMessage);
            expect(scope).toBeDefined();
            //expect(scope.message).toBeDefined();
        });
        
    });

});