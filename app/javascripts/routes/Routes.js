/**
 * Created by daviD on 07/04/2017.
 */
define(['./module'], function (routes) {

    'use strict';

    routes.config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/', { templateUrl: 'views/home/home.html', controller: 'HomeController' })
                //.when('/inbox', { templateUrl: 'partials/dashboard', controller: 'dashboardController' })
                .otherwise({ redirectTo: '/' });
        }
    ]);

});