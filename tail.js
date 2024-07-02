// FUNCTION IMPLEMENTATION

const tail = function(array) {
  return array.slice(1);
};

const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArrayEqual");


module.exports = tail;
