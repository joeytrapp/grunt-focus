'use strict';

var grunt = require('grunt'),
    ObjectFilter = require('../lib/object_filter');

exports.ObjectFilter = {
  setUp: function(done) {
    done();
  },

  tearDown: function(done) {
    // setup here if necessary
    done();
  },

  testOnlyReturnsKeysInIncludeOption: function(test) {
    var filter = new ObjectFilter({ include: ['one', 'two'] }),
        expected = { one: 'something', two: {} },
        obj = { one: 'something', two: {}, three: [] };
    test.deepEqual(expected, filter.process(obj));
    test.done();
  },

  testOnlyReturnsKeysNotInExcludeOption: function(test) {
    var filter = new ObjectFilter({ exclude: ['one', 'three'] }),
        expected = { two: {} },
        obj = { one: 'something', two: {}, three: [] };
    test.deepEqual(expected, filter.process(obj));
    test.done();
  },

  testReturnsKeysAfterFilteringIncludeAndExclude: function(test) {
    var filter = new ObjectFilter({ include: ['one', 'three'], exclude: ['two', 'three'] }),
        expected = { one: 'something' },
        obj = { one: 'something', two: {}, three: [] };
    test.deepEqual(expected, filter.process(obj));
    test.done();
  }
};
