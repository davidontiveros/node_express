/**
 * Created by David Ontiveros on 9/28/2016.
 */
define(function (require) {
    'use strict';

    var angular = require('angular');
    var ngRoute = require('angular-route');
    var controllers = require('./controllers/index');
    var routes = require('./routes/index');
    var services = require('./services/index');
    //var directives = require('./directives');

    var app = angular.module('app', ['ngRoute','controllers', 'services', 'routes'/*'homeController'/*,'services', 'directives'*/]);

    app.init = function () {
        angular.bootstrap(document, ['app']);
    };

    app.run(['$log' ,function ($log) {
        $log.info('angular app running...');
    }]);

    return app;
});