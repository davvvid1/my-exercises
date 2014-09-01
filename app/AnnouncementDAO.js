(function () {
    'use strict';

    function AnnouncementDAO($resource) {
        var api = $resource('/api/announcement', null, {

        });
        return {
            query: function () {
                return api.query().$promise;
            }
        };
    }

    angular.module('exerciseApp').factory('AnnouncementDAO', ['$resource', AnnouncementDAO]);
})();
