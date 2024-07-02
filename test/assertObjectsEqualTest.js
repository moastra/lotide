const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#assertObjectsEqual", () => {
  it("returns true for two identical objects", () => {
    const numbers1 = { a: '1', b: 2 };
    const numbers2 = { b: 2, a: '1' };
    assert.deepEqual(eqObjects(numbers1, numbers2), true);
  });

  it("returns false for two different objects", () => {
    const numbers1 = { a: '1', b: 2 };
    const numbers2 = { b: 3, a: '1' };
    assert.deepEqual(eqObjects(numbers1, numbers2), false);
  });

  it("returns true for two identical nested objects", () => {
    const obj1 = { a: { nested: '1' }, b: 2 };
    const obj2 = { b: 2, a: { nested: '1' } };
    assert.deepEqual(eqObjects(obj1, obj2), true);
  });

  it("returns false for two different nested objects", () => {
    const obj1 = { a: { nested: '1' }, b: 2 };
    const obj2 = { b: 2, a: { nested: '2' } };
    assert.deepEqual(eqObjects(obj1, obj2), false);
  });
});