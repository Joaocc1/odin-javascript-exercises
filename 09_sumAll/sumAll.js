const sumAll = function (num1, num2) {
  let initVal = 0;
  let endVal = 0;
  let result = 0;

  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 % 1 !== 0 ||
    num2 % 1 !== 0
  ) {
    return "ERROR";
  }
  if (num1 <= num2) {
    initVal = num1;
    endVal = num2;
  } else if (num1 >= num2) {
    initVal = num2;
    endVal = num1;
  }

  for (let i = initVal; i <= endVal; i++) {
    result += i;
  }

  return result;
};

// console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
