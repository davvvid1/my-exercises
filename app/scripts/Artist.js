/**
 * Created by jbeynar on 9/3/14.
 *
 * Artist DAO factory
 */
angular.module('ngselect2App').factory('Artist',['$resource',function($resource){
    var ws_url = 'http://musicbrainz.org/ws/2/artist';
    var artist = $resource(ws_url, {fmt: 'json', limit: 10}, {
        query: {isArray: false}
    });
    return {
        query: function (searchString) {
            if (!searchString) {
                throw new Error('SearchString must not be empty');
            }
            return artist.query({query: searchString}).$promise;
        }
    }
}]);