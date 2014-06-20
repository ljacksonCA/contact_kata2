'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    describe('ContactListCtrl', function() {
        var scope, ctrl, data;

        beforeEach(module('contactControllers', 'contactServices'));

        beforeEach(inject(function($controller, storageService) {
            scope = {};
            data = [
                {
                    "name": "Lonnie Jackson",
                    "id": 1,
                    "phone": "(913)-384-0880",
                    "address": "200 1st St."
                },
                {
                    "name": "Mark Scannell",
                    "id": 2,
                    "phone": "(913)-384-2645",
                    "address": "300 2nd St."
                }
            ];
            storageService.set('contactList', data);
            storageService.set('idCounter',2);
            ctrl = $controller('ContactListCtrl', { $scope:scope, storageService:storageService });
        }));


        it('should have a controller ContactListCtrl', function() {
            expect(ctrl).toBeDefined();
        });

        it('should have 2 contacts', function() {
            expect(scope.contacts.length).toBe(2);
        });
    });

    describe('ContactDetailCtrl', function() {
        var scope, ctrl, storage;
        var rp, data;

        beforeEach(module('contactControllers', 'ngRoute', 'contactServices'));

        beforeEach(inject(function($controller, storageService, $routeParams) {
            scope = {};
            data = [
                {
                    "name": "Lonnie Jackson",
                    "id": 1,
                    "phone": "(913)-384-0880",
                    "address": "200 1st St."
                },
                {
                    "name": "Mark Scannell",
                    "id": 2,
                    "phone": "(913)-384-2645",
                    "address": "300 2nd St."
                },
                {
                    "name": "Kyle Fisher",
                    "id": 3,
                    "phone": "(913)-384-2645",
                    "address": "300 2nd St."
                }
            ];
            storage = storageService;
            storage.set('contactList', data);
            rp = {
                "contactId": 2
            };
            ctrl = $controller('ContactDetailCtrl', {
                                    $scope:scope,
                                    $routeParams: rp,
                                    storageService:storage
                                });
        }));

        it('should have a controller ContactDetailCtrl', function() {
            expect(ctrl).toBeDefined();
        });

        it('should remove contact when clicking delete button', function() {
            expect(storage.has('contactList')).toBe(true);
            expect(storage.get('contactList').length).toBe(3);
            console.log(storage);
            scope.removeContact();
            expect(storage.get('contactList').length).toBe(2);
        });
    });

});
