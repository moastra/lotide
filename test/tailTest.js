const tail = require("../tail")
const assertArraysEqual = require("../assertArrayEqual");

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result.length, 2); // ensure we get back two elements
assertArraysEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertArraysEqual(result[1], "Labs"); // ensure second element is "Labs"