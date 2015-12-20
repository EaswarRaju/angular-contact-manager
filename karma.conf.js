module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
	plugins: [
	  'karma-jasmine',
	  'karma-coverage',
	  'karma-chrome-launcher'
	],
    files: [
	  'vendor/angular/angular.min.js',
	  'vendor/angular-route/angular-route.min.js',
	  'vendor/angular-mocks/angular-mocks.js',
      'app/js/*.js',
      'app/tests/*.js'
    ],
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: { 'app/js/*.js': ['coverage'] },
	coverageReporter : {
		type: 'html',
		dir: 'coverage'
	}
  });
};