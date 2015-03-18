# fd-contains

[![Build Status](https://travis-ci.org/fp-dom/fd-contains.svg)](https://travis-ci.org/fp-dom/fd-contains) [![npm version](https://badge.fury.io/js/fd-contains.svg)](http://badge.fury.io/js/fd-contains)
> Checks if a node is a descendant of a given node or not in a functional way.


## Installation

`npm install fd-contains --save`

## Usage

```js
var contains = require('fd-contains'),
    append = require('fd-append'),
    elem = require('fd-elem'),
    aseert = require('assert');

let h1 = elem('h1', 'Test');
let h2 = elem('h2', 'Test');

append(document.body, h1);

assert.equal(contains(document.body)(h1), true); // passes
assert.equal(contains(document.body)(h2), false); // passes
```

## API

```
contains :: node -> otherNode
```

* node -> The parent node.

* otherNode -> The node that needs to be checked for.

