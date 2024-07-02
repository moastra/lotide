const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true for two identical objects with primitive values", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false for two objects with different values", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true for two identical objects with arrays as values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false for two objects with arrays and different values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});