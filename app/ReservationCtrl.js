(function () {
    'use strict';
    function ReservationCtrl($scope) {
        var ctrl = this;

        $scope.$watch(function () {
            return ctrl.list;
        }, function () {
            ctrl.save();

        }, true);

        ctrl.list = {

            selectRefreshment: '',
            selectZone: ''

        };


        ctrl.refreshments = [
            {value: 1, status: 'yes'},
            {value: 2, status: 'no'}
        ];

        ctrl.zones = [
            {value: 1, color: 'White'},
            {value: 2, color: 'Blue'},
            {value: 3, color: 'Red'},
            {value: 4, color: 'Green'},
            {value: 5, color: 'Black'}
        ];

        ctrl.isSummary = false;
        this.showSummary = function () {
            ctrl.isSummary = !ctrl.isSummary;
        };

        ctrl.formData = {};

        this.save = function(){
            ctrl.formData = {
                firstName: ctrl.list.firstName,
                lastName: ctrl.list.lastName,
                email: ctrl.list.email,
                selectRefreshment: ctrl.list.selectRefreshment,
                selectZone: ctrl.list.selectZone,
                vip: ctrl.list.vip,
                date: ctrl.list.date,
                comments: ctrl.list.comments
            };
        }


    }


    var module = angular.module('exerciseApp', ["xeditable"]);
    module.controller('ReservationCtrl', ['$scope', ReservationCtrl]);
})();
