'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
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
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
