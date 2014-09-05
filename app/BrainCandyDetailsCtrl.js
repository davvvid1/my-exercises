(function () {
    'use strict';
    function BrainCandyDetailsCtrl(CandyDAO, $routeParams) {
        var ctrl = this;
        CandyDAO.get($routeParams.id).then(function (data) {
            ctrl.details = data;
        });


        ctrl.newCandy = function () {
            CandyDAO.save(ctrl.details);
        }
        ctrl.delCandy = function () {
            CandyDAO.delete($routeParams.id);
        }


    }

    var module = angular.module("exerciseApp");
    module.controller('BrainCandyDetailsCtrl', ['CandyDAO', '$routeParams', BrainCandyDetailsCtrl]);
})();
