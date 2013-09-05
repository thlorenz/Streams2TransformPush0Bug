'use strict';

var getNumberSource = require('./NumberSource');
var getNumberDest = require('./NumberDest');
var getPowerTransform = require('./PowerTransform');

function numbers () {
  var src = getNumberSource({ objectMode: true, startValue: 1 }); // changing this to 0 breaks everything
  var trf = getPowerTransform({ objectMode: true });
  var dst = getNumberDest({  objectMode: true });

  src.pipe(trf).pipe(dst);
}

numbers();
