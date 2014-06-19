'use strict';

/* Controllers */
var contactControllers = angular.module('contactControllers', []);


contactControllers.controller('ContactListCtrl', ['$scope', 'storageService',
    function($scope, storageService) {
        var data = [];
        //var counter = storageService.get('idCounter');
        var counter = localStorage.length -1;

        for (var i =0; i < counter; i++) {
            data.push(storageService.get(i));
        }

        $scope.contacts = data;
    }]
);

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'storageService',
    function($scope, $routeParams, storageService) {
        $scope.contact = storageService.get($routeParams.contactId);
    }]
);

contactControllers.controller('AddPersonCtrl', ['$scope', 'storageService', '$window',
    function($scope, storageService, $window) {
        $scope.addContact = function() {
            if (!storageService.has('idCounter')) {
                storageService.set('idCounter', 0);
            }

            var id = storageService.get('idCounter');
            var info = {
                "name": $scope.nameBox,
                "id": id,
                "phone": $scope.phoneBox,
                "address": $scope.addressBox
            };

            storageService.set(id, info);
            storageService.set('idCounter', id + 1);
            $window.location.href = '#/contacts/';
        };
    }]
);

contactControllers.controller('EditContactCtrl', ['$scope', '$routeParams', 'storageService', '$window',
    function($scope, $routeParams, storageService, $window) {

        $scope.contact = storageService.get($routeParams.contactId);
        $scope.nameBox = $scope.contact.name;
        $scope.phoneBox = $scope.contact.phone;
        $scope.addressBox = $scope.contact.address;

        $scope.updateContact = function() {
            var id = $routeParams.contactId;
            var info = {
                "name": $scope.nameBox,
                "id": id,
                "phone": $scope.phoneBox,
                "address": $scope.addressBox
            };

            storageService.set(id, info);
            $window.location.href = '#/contacts/' + id;
        };
    }]
);
