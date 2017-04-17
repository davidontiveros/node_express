/*
var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: 'javascripts',

  // example of using a couple of path translations (paths), to allow us to refer to different library dependencies, without using relative paths
  paths: {
    'jquery': './vendors/jquery',
    'underscore': './vendors/underscore',
  },

  // example of using a shim, to load non AMD libraries (such as underscore)
  shim: {
    'underscore': {
      exports: '_'
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})

*/

var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      console.log(file);
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base', 'base' is the source location where karma.conf.js file is
  baseUrl: '/base/javascripts',

  paths: {
    'angular-mocks': './vendors/angular-mocks/angular-mocks',
    'angular': './vendors/angular/angular',
    'angular-route': './vendors/angular-route/angular-route',
    'jquery': './vendors/jquery/dist/jquery',
    'underscore': './vendors/underscore/underscore'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-mocks': {
      deps: ['angular']
    },
    'angular-route': {
      deps: ['angular']
    },
    'underscore': {
      exports: '_'
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
