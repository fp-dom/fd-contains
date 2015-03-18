"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var contains = _interopRequire(require("./"));

var append = _interopRequire(require("fd-append"));

var elem = _interopRequire(require("fd-elem"));

var h1 = elem("h1", "Test");
var h2 = elem("h", "Test");

append(document.body, h1);

it("fd-contains", function () {
  assert.equal(contains(document.body)(h1), true);
  assert.equal(contains(document.body)(h2), false);
});