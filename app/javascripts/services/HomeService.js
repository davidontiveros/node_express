/**
 * Created by daviD on 09/04/2017.
 */
define(['./module'], function (services) {

    'use strict';

    services.service('HomeService', ['$log', '$q', function ($log, $q) {

        this.test = test;

        function test(input){

            $log.debug('homeservice.test() called with input: '+input);

            var deferred = $q.defer();

            var data = 'daviD';
            deferred.resolve(data);

            return deferred.promise;
        }

    }]);
});