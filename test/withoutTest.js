const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] without [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for ['1', '2', '3'] without [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("does not alter the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});