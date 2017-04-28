/**
 * Created by daviD on 19/04/2017.
 */
module.exports = function(grunt) {

    grunt.initConfig({

        //package json containing needed Grunt plugins
        pkg: grunt.file.readJSON('package.json'),

        //small tidy up task
        clean:{
            start: ['javascripts/prod/*']
        },

        requirejs: {
            build: {
                options: {
                    baseUrl: 'javascripts', // should be same baseUrl as the javascipts/main.js
                    out: 'javascripts/prod/app.js', // output result file
                    name: '../node_modules/almond/almond', // reference to almond library
                    include: 'app', // name of our main module requirejs application (can be found @ main javascipts/main.js)
                    mainConfigFile: 'javascripts/main.js' // path to the requirejs main file
                }
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                singleRun: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s)
    grunt.registerTask('default', ['karma','clean:start','requirejs:build']);
};