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


    ctrl.select2options = {
        multiple: true,
        //simple_tags: true,
        minimumInputLength: 1,
        query: function (que) {
            Artist.query(que.term).then(function (data) {
                ctrl.artists = data.artist.map(function (a, b) {
                    var obj = {};
                    obj.id = b + 1;
                    obj.text = a.name;
                    return obj;
                });
            });
            var data = {
                results: ctrl.artists
            };
            que.callback(data);
        }

    };


});