/**
 * Created by daviD on 09/04/2017.
 */
define(['./module'], function (services) {

    'use strict';

    services.service('UserService', ['$log', '$q', '$http', function ($log, $q, $http) {

        this.getAll = getAll;

        function getAll(){

            var deferred = $q.defer();

            $http.get('/users').then(function(response){
                deferred.resolve(response.data.users);
            }, function(response){
                $log.error('error occurred');
                deferred.reject(response);
            });

            return deferred.promise;
        }

    }]);
});