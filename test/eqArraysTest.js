const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 12]), false);