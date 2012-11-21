'use strict';


// Declare app level module which depends on filters, and services
angular.module('spockEnterprise', ['myApp.filters', 'report.Services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/spec-detail', {templateUrl: 'partials/spec-detail.html', controller: SpecDetailController});
    $routeProvider.when('/all-specs', {templateUrl: 'partials/all-specs.html', controller: AllSpecsController});
    $routeProvider.otherwise({redirectTo: '/all-specs'});
  }]);
