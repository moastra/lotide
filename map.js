// Our map function will take in two arguments:
//
//     - An array to map
//     - A callback function
//
// The map function will return a new array based on the results of the callback function.

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word [0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const animals = ["cat", "dog", "elephant", "tiger"];


const results2 = map(animals, animal => animal.length);
assertArraysEqual(results2, [3, 3, 8, 5]);