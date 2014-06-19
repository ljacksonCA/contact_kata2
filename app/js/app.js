'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'contactServices',
  'myApp.directives',
  'contactControllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contacts',
        {
            templateUrl: 'partials/contactList.html',
            controller: 'ContactListCtrl'
        });
    $routeProvider.when('/contacts/:contactId',
        {
            templateUrl: 'partials/contactDetails.html',
            controller: 'ContactDetailCtrl'
        });
    $routeProvider.when('/add',
        {
            templateUrl: 'partials/addPerson.html',
            controller: 'AddPersonCtrl'
        });
    $routeProvider.when('/edit/:contactId',
        {
            templateUrl: 'partials/editContact.html',
            controller: 'EditContactCtrl'
        });
    $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
