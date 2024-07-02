const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqObjects = require("./eqObjects");
const countLetters = require("./countLetters");
const assertObjectsEqual = require("./assertObjectsEqual");
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqObjects,
  countLetters,
  assertObjectsEqual,
  countOnly,
  eqArrays,
  findKey,
  findKeyByValue,
  letterPositions,
  takeUntil,
  without
};