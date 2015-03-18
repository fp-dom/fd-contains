"use strict";

var curry2 = require("fj-curry").curry2;


var _contains = function (node, otherNode) {
  return node.contains(otherNode);
};

module.exports = curry2(_contains);