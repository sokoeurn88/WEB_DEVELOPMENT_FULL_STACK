var names = ["Sokoeurn", "Angela", "Ben", "James"];

function whoPaying() {
  var numberOfPeople = names.length;

  var randomPersonPOsition = Math.floor(Math.random() * numberOfPeople);

  var randomPerson = names[randomPersonPOsition];

  return randomPerson + " is going to pay for lunch today.";
}

whoPaying();
