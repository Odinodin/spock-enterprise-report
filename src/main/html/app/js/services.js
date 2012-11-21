'use strict';

/* Services */


var specService = angular.module('report.Services', []);

specService.factory('specService', function () {
    var sharedSpecsService = {};

    // TODO Bad way of getting in data; need to refactor this
    sharedSpecsService.data = globalSpecs

    sharedSpecsService.getAllSpecs = function() {
        return this.data;
    };


    sharedSpecsService.getSpec = function(index) {
        return this.data[index];
    };

    return sharedSpecsService;
});