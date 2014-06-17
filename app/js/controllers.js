'use strict';

/* Controllers */
var contactControllers = angular.module('contactControllers', []);


contactControllers.controller('ContactListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('contacts/contacts.json').success(function(data) {
            $scope.contacts = data;
        });
    }]
);

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('contacts/' + $routeParams.contactId + '.json').success(function(data) {
            $scope.contact = data;
        })
    }]
);
