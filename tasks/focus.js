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
    var watchers = grunt.config.get('watch');

    if (typeof watchers !== 'object') {
      grunt.fail.warn('watch config must be defined and be an object');
      return;
    }

    var filter = new ObjectFilter(this.data),
        options = watchers.options,
        filteredWatchers = filter.process(watchers);

    filteredWatchers.options = options || {};
    grunt.config.set('watch', filteredWatchers);
    grunt.task.run(['watch']);
  });
};
