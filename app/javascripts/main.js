/**
 * Created by daviD on 06/04/2017.
 */
require.config({

    // alias libraries paths
    paths: {
        'angular': './vendors/angular/angular',
        'angular-route': './vendors/angular-route/angular-route'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },

        'angular-route': {
            deps: ['angular']
        }
    }

});

require(['app'], function (app) {
    app.init();
});