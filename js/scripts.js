$(document).ready(function() {
    $("form#odd-numbers").submit(function(event) {
      event.preventDefault();
      var decimalNumbers = parseInt($("input#numbers").val());
      var result = decimalNumbers(numbers);
      $("#result").text(result);
    });
  });
  var numbers = function(number) {
      return false;
    };
    var decimalNumbers = function(number) {
        if ((number % 3 === 0) && (number % 5 !== 0) || (number % 15 === 0)) {
          return true;
        } else {
          return false;
        }
      };

      // user interface logic
      $(document).ready(function() {
        $("form#decimalNumbers").submit(function(event) {
          event.preventDefault();
          var number = parseInt($("input#number").val());
          var result = decimalNumbers(number);

          $(".number").text(number);

          if (!result) {                 // same as writing if (result === false)
            $(".ping").text("pong");
          } else {
            $(".pingpong").text("");
          }

          $("#result").show();
        });
      });
