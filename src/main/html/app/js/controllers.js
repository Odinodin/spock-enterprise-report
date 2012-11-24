'use strict';

/* Controllers */

function AllSpecsController($scope, sharedSpecsService, translateService) {

    $scope.specs = sharedSpecsService.getAllSpecs();

    $scope.translateBlock = translateService.translateBlock;

    $scope.totalTestCount = sharedSpecsService.countTotalNumberOfTests();
    $scope.totalErrorCount = sharedSpecsService.countErrors();
    $scope.totalSuccessCount = $scope.totalTestCount - $scope.totalErrorCount;

    $scope.totalSuccessPercentage = (($scope.totalTestCount - $scope.totalErrorCount) / $scope.totalTestCount) * 100;
    $scope.totalErrorPercentage = 100 - $scope.totalSuccessPercentage;
}

AllSpecsController.$inject = ['$scope', 'specService', 'translateService'];

function SpecDetailController($scope, $location, sharedSpecService) {

    var specId = ($location.search()).specId;
    $scope.spec = sharedSpecService.getSpec(specId);

}

SpecDetailController.$inject = ['$scope', '$location', 'specService'];