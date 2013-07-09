/*
 * grunt-focus
 * https://github.com/joeytrapp/grunt-focus
 *
 * Copyright (c) 2013 Joey Trapp
 * Licensed under the MIT license.
 */

'use strict';

var ObjectFilter = require('../lib/object_filter');

module.exports = function(grunt) {
  grunt.registerMultiTask('focus', 'Your task description goes here.', function() {
    var watchers = grunt.config.get('watch'),
        filter = new ObjectFilter(this.data);

    if (typeof watchers !== 'object') {
      grunt.fail.warn('watch config must be defined and be an object');
      return;
    }

    grunt.config.set('watch', filter.process(watchers));
    grunt.task.run(['watch']);
  });
};
