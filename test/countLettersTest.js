const countLetters = require("../countLetters");
const assert = require('chai'). assert;
const result = countLetters('Hello World');

// TEST CASES
describe("#countLetters", () => {
  it("returns 1 for 'H' in 'Hello World'", () => {
    assert.strictEqual(result['H'], 1);
  });

  it("returns 1 for 'e' in 'Hello World'", () => {
    assert.strictEqual(result['e'], 1);
  });

  it("returns 3 for 'l' in 'Hello World'", () => {
    assert.strictEqual(result['l'], 3);
  });
});