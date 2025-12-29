const removeFromArray = function (arr, ...items) {
  if (!items) {
    return arr;
  }

  for (const item of items) {
    if (arr.includes(item)) {
      for (const arrItem of arr) {
        if (arrItem === item) {
          arr.splice(arr.indexOf(item), 1, undefined);
        }
      }
    }
  }

  return arr.filter((filteredItem) => filteredItem !== undefined);
};

// console.log(removeFromArray([1, 2, 3, 3, 4, 4, 4, 4], 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
