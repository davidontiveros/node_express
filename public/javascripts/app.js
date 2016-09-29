/**
 * Created by David Ontiveros on 9/28/2016.
 */
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    });
});

app.controller('homeCtrl', ['$scope', function ($scope) {
   $scope.message = 'home controller loaded .. ';
}]);