'use strict';

var util = require('util');
var stream = require('stream');
var Transform = stream.Transform;

util.inherits(PowerTransform, Transform);

function PowerTransform (opts) {
  Transform.call(this, opts);
}

PowerTransform.prototype._transform = function (n, encoding, cb) {
  var self = this;

  function calculate () {
    self.push(n, encoding);
    self.push(n * n, encoding);
    self.push(Math.sqrt(n), encoding);
    cb();
  }

  setTimeout(calculate, 200);
};

module.exports = function (opts) { 
  var trf = new PowerTransform(opts); 
  return trf;
};
