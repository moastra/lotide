const tail = require("../tail")
const assert = require("chai").assert;
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns 2 for the length ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result.length,2);
  });
  it("return 'Lighthouse' for result[0]", () => {
    assert.deepEqual(result[0], "Lighthouse");
  });
  it("return 'Labs' for result[1]", () => {
    assert.deepEqual(result[1], "Labs");
  });
});

