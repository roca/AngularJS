module.exports = function(config) {
  config.set({
    basePath: '../app',

    autoWatch: false,
    singleRun: false,

    frameworks: ['ng-scenario'],

    files: [
      '../test/e2e/**/*.js'
    ],

    urlRoot: '/',
    proxies: {
      '/': 'http://localhost:8000/'
    },

    exclude: [
    ],

    reporters: ['progress'],

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    browsers: ['Safari'],

    plugins : [
      'karma-safari-launcher',
      'karma-ng-scenario'
    ],

    captureTimeout: 60000
  });
};
