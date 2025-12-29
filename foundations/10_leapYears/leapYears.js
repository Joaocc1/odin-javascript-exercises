const leapYears = function (year) {
  if (!Number.isInteger(year)) return "ERROR";

  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
