const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  const restaurants = {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  };

  it("returns 'noma' for stars === 2", () => {
    const results1 = findKey(restaurants, x => x.stars === 2);
    assert.strictEqual(results1, 'noma');
  });

  it("returns 'Akaleri' for stars === 3", () => {
    const results2 = findKey(restaurants, x => x.stars === 3);
    assert.strictEqual(results2, 'Akaleri');
  });
});