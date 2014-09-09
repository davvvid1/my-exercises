(function () {
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource', 'ngRoute']);

    module.directive('currency', ['$filter', function ($filter) {
        return {
            require: 'ngModel',
            link: function (elem, $scope, attrs, ngModel) {
                ngModel.$formatters.push(function (val) {
                    return $filter('currency')(val)
                });
                ngModel.$parsers.push(function (val) {
                    return val.replace(/[\$,]/, '')
                });
            }
        }
    }]);

    module.config(function ($provide, $routeProvider) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'views/productList.html',
            controller: 'ProductListCtrl as productList'
        });
        $routeProvider.when('/details/:id', {
            templateUrl: 'views/productDetails.html',
            controller: 'ProductDetailsCtrl as productDetails'
        });
        $routeProvider.when('/new', {
            templateUrl: 'views/productNew.html',
            controller: 'ProductNewCtrl as productNew'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend) {
        var sequence = 1;
        var products = {};
        [
            {   id: sequence++,
                product: 'Rumianek',
                price: '200'
            },
            {   id: sequence++,
                product: 'JSON prawde Ci powie',
                price: '100'
            }
        ].every(function (value) {
                products[value.id] = value;
                return true;
            });
        $httpBackend.whenGET(/.*\.html/).passThrough();
        $httpBackend.whenGET('/api/product').respond(products);

        $httpBackend.whenGET(/\/api\/product\/(\d+)/).respond(function (method, url) {
            var match = /\/api\/product\/(\d+)/.exec(url);
            console.log(match);
            if (match) {
                var id = parseInt(match[1], 10);
                console.log(products[id]);
                return [200, products[id]];
            }
            return [404];
        });

        $httpBackend.whenPUT('/api/product/new').respond(function (method, url, candyData) {
            console.log('metoda: ' + method + '\nurl: ' + url + '\ncandy: ' + candyData);
            candyData = JSON.parse(candyData);
            if (products[candyData.id]) {
                products[candyData.id].product = candyData.product;
                products[candyData.id].price = candyData.price;
            } else {
                candyData.id = sequence++;
                products[candyData.id] = candyData;
            }

            return [200, candyData];
        });

        // PUT /api/product/new
    });
})();
