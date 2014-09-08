'use strict';

/**
 * @ngdoc function
 * @name ngselect2App.controller:Ngselect2Ctrl
 * @description
 * # Ngselect2Ctrl
 * Controller of the ngselect2App
 */
angular.module('ngselect2App').controller('Ngselect2Ctrl', function ($scope, $resource, Artist) {
    var ctrl = this;

    this.artists = [];
    this.artistModel = [];


    console.log(this.query);


    $scope.$watch(function () {
        return ctrl.query;
    }, function () {
        //console.log(ctrl.query);
        ctrl.search(ctrl.query);
        //console.log(ctrl.artists);
    }, true);


    this.search = function (que) {
        if (!que) {
            console.log('return');
            return;
        }
        Artist.query(que).then(function (data) {
            ctrl.artists = data.artist;
        });
    }


    this.select2options = {
        multiple: true,
        simple_tags: true,
        tags: []  // Can be empty list.
    };


    $("#sel").on('select2-highlight', function (e) {


        ctrl.search(e.val);
        console.log(ctrl.artists);
        ctrl.artists.every(function (a, b) {
            console.log(a.name);
            ctrl.select2options.tags[b] = a.name;
            return true;
        })
    });


});