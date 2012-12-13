'use strict';


// Declare app level module which depends on filters, and services
angular.module('spockEnterprise', ['myApp.filters', 'report.Services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/all-specs-table', {templateUrl: 'partials/all-specs-table.html', controller: AllSpecsTableController});
    $routeProvider.when('/all-specs', {templateUrl: 'partials/all-specs.html', controller: AllSpecsController});
    $routeProvider.otherwise({redirectTo: '/all-specs'});
  }]);
