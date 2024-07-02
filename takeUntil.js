const takeUntil = function(array, callback) {
  let goodStuff = [];
  for (const item of array) {
    if(callback(item)) {
      break;
    }
    goodStuff.push(item);
  }
  return goodStuff;
};

module.exports = takeUntil;