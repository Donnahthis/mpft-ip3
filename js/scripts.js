// $(document).ready(function() {
//     $("form#odd-numbers").submit(function(event) {
//       event.preventDefault();
//       var decimalNumbers = parseInt($("input#numbers").val());
//       var result = decimalNumbers(numbers);
//       $("#result").text(result);
//     });
//   });
//   var numbers = function(number) {
//       return false;
//     };
//     var decimalNumbers = function(number) {
//         if ((number % 3 === 0) && (number % 5 !== 0) || (number % 15 === 0)) {
//           return true;
//         } else {
//           return false;
//         }
//       };
//
//       // user interface logic
//       $(document).ready(function() {
//         $("form#decimalNumbers").submit(function(event) {
//           event.preventDefault();
//           var number = parseInt($("input#number").val());
//           var result = decimalNumbers(number);
//
//           $(".number").text(number);
//
//           if (!result) {                 // same as writing if (result === false)
//             $(".ping").text("pong");
//           } else {
//             $(".pingpong").text("");
//           }
//
//           $("#result").show();
//         });
//       });

var pingpongGame = function(userNumber) {
  var numberArray = [];
  if (userNumber < 0) { //negative numbers
    for (var index = -1; index >= userNumber; index--) {
      numberArray.push(index);
    }
    numberArray.forEach(function(number) {
      if (number % 15 === 0) {
        numberArray[-number-1] = 'pingpongGame';
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
    $('ul#result').empty();
    on() {
  $('form#pingpongGame').submit(function(event) {
    var userNumber = $('input#userNumber').val();

   displayResultList(pingpongGame(userNumber));

   event.preventDefault();
  });
});
