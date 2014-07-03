module.exports = function(config){
  config.set({

    basePath : '../app',

    preprocessors: {
        '**/*.html':'ng-html2js'
    },

    // ngHtml2JsPreprocessor:{
    //     stripPrefix: 'app/'
    //     prependPrefix: 'app/'
    // },

    files : [
      'js/jquery-1.11.1.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular/angular-sanitize.min.js',
      'bower_components/angular/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      '../test/lib/sinon-1.10.2.js',
      'js/**/*.js',
      '../test/unit/**/*.js',
      'templates/directives/*.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
