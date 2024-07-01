// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let repeat = {};
  for (const char of sentence) {
    if (char !== ' ') {
      if (repeat[char]) {
        repeat[char] += 1;
      } else {
        repeat[char] = 1;
      }
    }
  }
  return repeat;
};

// TEST CASES
const result = countLetters('Hello World');
assertEqual(result['H'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 3);
