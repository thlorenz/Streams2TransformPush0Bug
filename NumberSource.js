'use strict';

var util = require('util');
var stream = require('stream');
var Readable = stream.Readable;

util.inherits(NumberSource, Readable);

function NumberSource (opts) {
  Readable.call(this, opts);
  this.count = typeof opts.startValue !== 'undefined' ? opts.startValue : 1;
  this.reads = 0;
}

NumberSource.prototype._read = function (size) {
  size = size || 1;
//  process.stderr.write(' ' + this.reads++);
  this.push(this.count++);
}

module.exports = function (opts) { 
  var src = new NumberSource(opts);
  return src;
};
