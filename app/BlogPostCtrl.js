(function () {
    'use strict';
    function BlogPostCtrl() {
        this.posts = [
            {id: 23, name: 'john', pets: 'cat'},
            {id: 88, name: 'carl', pets: 'dog'}
        ];
    }

    var module = angular.module("exerciseApp", []);
    module.controller('BlogPostCtrl', [BlogPostCtrl]);
})();
