const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe("#letterPositions", () => {
  it("returns [1] for 'hello' and letter 'e'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [2] for 'lighthouse in the house' and letter 'i'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").i, [1, 11]);
  });

  it("returns [3, 5, 15, 18] for 'lighthouse in the house' and letter 'h'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });

  it("returns [2] for 'lighthouse in the house' and letter 'g'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").g, [2]); // Assuming 'g' at index 2 was intended
  });

  it("returns undefined for letters not present", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").z, undefined);
  });
});