'use strict';

/* Controllers */
var contactControllers = angular.module('contactControllers', []);


contactControllers.controller('ContactListCtrl', ['$scope', 'storageService',
    function($scope, storageService) {
        var data = [];
        if (storageService.has('contactList')) {
            data = storageService.get('contactList');
        }

        $scope.contacts = data;
    }]
);

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'storageService', '$window', '$log',
    function($scope, $routeParams, storageService, $window, $log) {
        var data = storageService.get('contactList');
        var contactIndex = -1;

        //Find contact in array to show that contact's details
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == $routeParams.contactId) {
                $scope.contact = data[i];
                contactIndex = i;
            }
        }

        $scope.removeContact = function() {
            var confirmation = confirm("Are you sure you want to delete " + $scope.contact.name + "?");

            if (confirmation) {
                if (contactIndex >= 0) {
                    data.splice(contactIndex, 1);
                    storageService.set('contactList', data);
                }
                $window.location.href = '#/contacts/';
            }
        };
    }]
);

contactControllers.controller('AddPersonCtrl', ['$scope', 'storageService', '$window',
    function($scope, storageService, $window) {
        $scope.addContact = function() {
            if (!storageService.has('contactList')) {
                storageService.set('contactList', []);
            }

            if (!storageService.has('idCounter')) {
                storageService.set('idCounter', 0);
            }

            var info = storageService.get('contactList');
            var id = storageService.get('idCounter');
            info.push({
                "name": $scope.nameBox,
                "id": id,
                "phone": $scope.phoneBox,
                "address": $scope.addressBox
            });

            storageService.set('contactList', info);
            storageService.set('idCounter', id + 1);
            $window.location.href = '#/contacts/';
        };
    }]
);

contactControllers.controller('EditContactCtrl', ['$scope', '$routeParams', 'storageService', '$window',
    function($scope, $routeParams, storageService, $window) {
        var data = storageService.get('contactList');
        var contactIndex = -1;

        //Find contact in array to show that contact's details for editing
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == $routeParams.contactId) {
                $scope.contact = data[i];
                contactIndex = i;
            }
        }

        $scope.nameBox = $scope.contact.name;
        $scope.phoneBox = $scope.contact.phone;
        $scope.addressBox = $scope.contact.address;

        $scope.updateContact = function() {
            data[contactIndex] = {
                "name": $scope.nameBox,
                "id": $routeParams.contactId,
                "phone": $scope.phoneBox,
                "address": $scope.addressBox
            };

            storageService.set('contactList', data);
            $window.location.href = '#/contacts/' + $routeParams.contactId;
        };
    }]
);
