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

function AllSpecsTableController($scope, sharedSpecsService, translateService) {
    $scope.specs = sharedSpecsService.getAllSpecs();

    $scope.translateBlock = translateService.translateBlock;

    $scope.totalTestCount = sharedSpecsService.countTotalNumberOfTests();
    $scope.totalErrorCount = sharedSpecsService.countErrors();
    $scope.totalSuccessCount = $scope.totalTestCount - $scope.totalErrorCount;

    $scope.totalSuccessPercentage = (($scope.totalTestCount - $scope.totalErrorCount) / $scope.totalTestCount) * 100;
    $scope.totalErrorPercentage = 100 - $scope.totalSuccessPercentage;


    $scope.getFeatureExample = function(feature) {


        var result = document.createDocumentFragment();

        feature.blocks.forEach(function (block){

            var blockKind = document.createElement("strong");
            blockKind.textContent = translateService.translateBlock(block.kind);
            result.appendChild(blockKind);

            result.appendChild(document.createTextNode(" " + block.texts.join(" and ") + " "));

        });

        /*
        return feature.blocks.reduce(function (prev, block) {
            return prev + translateService.translateBlock(block.kind) + " " + block.texts.join(" and ") + " ";
        }, "");
        */

        return result;
    };

}

AllSpecsTableController.$inject = ['$scope', 'specService', 'translateService'];