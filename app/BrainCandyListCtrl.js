(function () {
    'use strict';
    function BrainCandyListCtrl(CandyDAO) {
        var ctrl = this;
        CandyDAO.query().then(function (data) {
            ctrl.posts = data;
        });
    }

    var module = angular.module("exerciseApp");
    module.controller('BrainCandyListCtrl', ['CandyDAO', BrainCandyListCtrl]);
})();
