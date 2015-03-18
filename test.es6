import assert from 'assert';
import contains from './';
import append from 'fd-append';
import elem from 'fd-elem';

let h1 = elem('h1', 'Test');
let h2 = elem('h2', 'Test');

append(document.body, h1);

it('fd-contains', () => {
  assert.equal(contains(document.body)(h1), true);
  assert.equal(contains(document.body)(h2), false);
});
