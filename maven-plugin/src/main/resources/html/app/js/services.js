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


    sharedSpecsService.countErrors = function() {
        return this.data.map(function (spec) { return spec.numberOfErrors }).reduce(function (prev, curr) { return prev + curr; });
    };


    sharedSpecsService.countTotalNumberOfTests = function() {
        return this.data.map(function (spec) { return spec.features.length }).reduce(function (prev, curr) { return prev + curr; });
    };


    return sharedSpecsService;
});

specService.factory('translateService', function() {

    var translateService = {};

    var blocks = {
        EXPECT: "expect",
        SETUP: "given",
        THEN: "then",
        WHERE: "where",
        WHEN: "when"};

    translateService.translateBlock = function (blockName) {
        return blocks[blockName]
    };

    return translateService;
});