'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    describe('ContactListCtrl', function() {
        var scope, ctrl, $httpBackend;

        beforeEach(module('contactControllers'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('contacts/contacts.json').respond([
                {name: 'Joe'},
                {name: 'Tom'},
                {name: 'Bob'}
            ]);
            scope = $rootScope.$new();
            ctrl = $controller('ContactListCtrl', {$scope:scope});
        }));

        it('should have a controller ContactListCtrl', inject(function($controller) {
            //spec body
            var myCtrl1 = $controller('ContactListCtrl', { $scope:scope });
            expect(myCtrl1).toBeDefined();
        }));

        it('should have 2 contacts', inject(function($controller) {
            expect(scope.contacts).toBeUndefined();
            $httpBackend.flush();
            expect(scope.contacts.length).toBe(3);
        }));
    });

    describe('ContactDetailCtrl', function() {

        beforeEach(module('contactControllers', 'ngRoute'));

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
