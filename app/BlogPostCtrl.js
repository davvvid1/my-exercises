(function () {
    'use strict';
    function BlogPostCtrl(PostDAO) {
        var hw = this;
        PostDAO.query().then(function (data) {
            hw.posts = data;
        });
    }

    var module = angular.module("exerciseApp");
    module.controller('BlogPostCtrl', ['PostDAO',BlogPostCtrl]);
})();
