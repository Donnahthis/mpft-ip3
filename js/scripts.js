var person = function(userNumber) {
  var numberArray = [];
  if (userNumber < 0) { //negative numbers
    for (var index = -1; index >= userNumber; index--) {
      numberArray.push(index);
    }
    numberArray.forEach(function(number) {
      if (number % 15 === 0) {
        numberArray[-number-1] = 'person';
      } else if (number % 3 === 0) {
        numberArray[-number-1] = 'ping';
      } else if (number % 5 === 0) {
        numberArray[-number-1] = 'pong';
      }
    });
  } else if (userNumber > 0) { //positive numbers
      for (var index = 1; index <= userNumber; index++) {
        numberArray.push(index);
      }
      numberArray.forEach(function(number) {
        if (number % 15 === 0) {
          numberArray[number-1] = 'pingpong';
        } else if (number % 3 === 0) {
          numberArray[number-1] = 'ping';
        } else if (number % 5 === 0) {
          numberArray[number-1] = 'pong';
        }
      });
  }
  return numberArray;
}

var displayResultList = function(outputArray) {
    $('ul#btn').empty();
  outputArray.forEach(function(item) {
    $('ul#btn').append('<li>' + item + '</li>');
  });
  return;
}

$(document).ready(function() {
  $('form#person').submit(function(event) {
    var userNumber = $('input#userNumber').val();

   displayResultList(person(userNumber));

   event.preventDefault();
  });
});
