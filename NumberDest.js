'use strict';

var util = require('util');
var stream = require('stream');
var Writable = stream.Writable;

util.inherits(NumberDest, Writable);

function NumberDest (opts) {
  Writable.call(this, opts);
}

NumberDest.prototype._write = function (chunk, encoding, cb) {
  var n = parseInt(chunk, 10);
  process.stderr.write(':' + n + ':');
  setTimeout(cb, 100);
}

module.exports = function (opts) { 
  var dst = new NumberDest(opts); 
  return dst;
};
