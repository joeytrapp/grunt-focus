var ObjectFilter,
    util = require('util');

ObjectFilter = module.exports = function ObjectFilter(options) {
  this.include = options.include || false;
  this.exclude = options.exclude || false;
};

ObjectFilter.prototype.process = function(watchers) {
  var processed = {};
  if (this.include && util.isArray(this.include)) {
    this.include.forEach(function(i) {
      if (watchers[i]) processed[i] = watchers[i];
    });
  } else {
    processed = watchers;
  }
  if (this.exclude && util.isArray(this.exclude)) {
    this.exclude.forEach(function(e) {
      if (processed[e]) delete processed[e];
    });
  }
  return processed;
};


