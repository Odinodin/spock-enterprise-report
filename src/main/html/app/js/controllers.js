'use strict';

/* Controllers */

function AllSpecsController($scope, sharedSpecsService) {

    $scope.specs = sharedSpecsService.getAllSpecs();
}

AllSpecsController.$inject = ['$scope', 'specService'];


function SpecDetailController($scope, $location, sharedSpecService) {

    var specId = ($location.search()).specId;
    $scope.spec = sharedSpecService.getSpec(specId);

}

SpecDetailController.$inject = ['$scope', '$location', 'specService'];