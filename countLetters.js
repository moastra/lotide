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

module.exports = countLetters
