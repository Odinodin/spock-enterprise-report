'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('featureBlock', ['translateService', function () {
        return function (scope, element, attrs) {

            var feature = scope.$eval('feature');
            console.log("FEATURE: ", feature.blocks);

            feature.blocks.forEach(function (block) {

                var blockKind = document.createElement("strong");
                //blockKind.textContent = //translateService.translateBlock(block.kind);
                blockKind.textContent = block.kind;
                element[0].appendChild(blockKind);

                element[0].appendChild(document.createTextNode(" " + block.texts.join(" and ") + " "));

            });

        };
    }]);
