const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])){
      result.push(source[i]);
    }
  }
  console.log(result);
  return result;
}

module.exports = without;