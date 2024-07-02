// FUNCTION IMPLEMENTATION
const middle = function(arr) {
  const length = arr.length;
  const mid = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  }
  if (length % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  } else {
    return [arr[mid]];
  }
};

module.exports = middle;
