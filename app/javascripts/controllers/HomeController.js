/**
 * Created by daviD on 07/04/2017.
 */
define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('HomeController', ['$scope', '$log', 'HomeService', 'UserService', function ($scope, $log, HomeService, UserService) {

        $log.info('HomeController loaded');

        function onLoad(){
            UserService.getAll().then(function(data) {
                $scope.userList = data;
                $log.debug($scope.userList);
            });
        }

        function test(){
            HomeService.test('daviD').then(function(data) {
                $scope.message = 'Hello '+data;
            });
        }

        onLoad();
    }]);
});