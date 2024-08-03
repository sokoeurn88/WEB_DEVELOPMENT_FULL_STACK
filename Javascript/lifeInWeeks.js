function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;
  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks and " +
      months +
      " months left in this life."
  );

  /*************Don't change the code below**********/
}
lifeInWeeks(12);
