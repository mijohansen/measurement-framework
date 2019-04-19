// Karma configuration
// Generated on Thu Mar 08 2018 08:47:32 GMT+0100 (CET)

const jasmine = require('jasmine')
const rollupConfig = require('./rollup.config')
const buble = require('rollup-plugin-buble')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')

delete rollupConfig.input
delete rollupConfig.output.file

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

rollupConfig.plugins = [
  json(),
  resolve({
    mainFields: [
      ['jsnext', 'jsnext:main', true]
    ],
    extensions: ['.js', '.json'], // Default: ['.js']
    preferBuiltins: true, // Default: true
    modulesOnly: false,
    browser: true, // Default: false
  }),
  commonjs(), // converts date-fns to ES modules
  buble(),
]

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // plugins: ['karma-jquery', 'karma-jasmine','karma-rollup-preprocessor'],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jquery-3.2.1'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'tests/*.js', watched: false },
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/*.js': ['rollup'],
    },

    // rollup settings. See Rollup documentation
    rollupPreprocessor: rollupConfig,

    // tests results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

  })
}
