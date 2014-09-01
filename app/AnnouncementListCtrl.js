(function () {
    'use strict';
    function AnnouncementListCtrl(AnnouncementDAO) {
        var hw = this;


        AnnouncementDAO.query().then(function (data) {
            hw.posts = data;
        })
    }

    var module = angular.module("exerciseApp");
    module.controller('AnnouncementListCtrl', ['AnnouncementDAO',AnnouncementListCtrl]);

})();
