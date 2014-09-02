(function () {
    'use strict';
    function PostDetailsCtrl(PostDAO, $routeParams) {
        var ctrl = this;
        PostDAO.get($routeParams.id).then(function (data) {
            ctrl.details = data;
        });
    }

    var module = angular.module("exerciseApp");
    module.controller('PostDetailsCtrl', ['PostDAO', '$routeParams',PostDetailsCtrl]);
})();
