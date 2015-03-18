import {curry2} from 'fj-curry';

let _contains = (node, otherNode) => node.contains(otherNode);

export default curry2(_contains);
