'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    describe('ContactListCtrl', function() {
        var scope, ctrl;

        beforeEach(module('contactControllers', 'contactServices'));

        beforeEach(inject(function($controller, storageService) {
            scope = {};
            storageService.set('idCounter',3);
            storageService.set('1',1);
            storageService.set('2',1);
            storageService.set('3',1);
            ctrl = $controller('ContactListCtrl', { $scope:scope, storageService:storageService });
        }));


        it('should have a controller ContactListCtrl', function() {
            expect(ctrl).toBeDefined();
        });

        it('should have 3 contacts', function() {
            expect(scope.contacts.length).toBe(3);
        });
    });

    describe('ContactDetailCtrl', function() {

        beforeEach(module('contactControllers', 'ngRoute', 'contactServices'));

        it('should have a controller ContactDetailCtrl', inject(function($controller, $routeParams) {
            //spec body
            var myCtrl2 = $controller('ContactDetailCtrl',
                {
                    $scope: {},
                    $routeParams: $routeParams
                });
            expect(myCtrl2).toBeDefined();
        }));
    });

});
