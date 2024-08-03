function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "it is leap year";
      } else {
        return "Not a leap year";
      }
    } else {
      return "It is a leap year";
    }
  } else {
    return "Not a leap year";
  }
}

//calling a function
var leapyear = isLeap(2024);
console.log(leapyear);