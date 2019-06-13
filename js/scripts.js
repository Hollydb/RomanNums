//Front End:

$(document).ready(function() {

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var num = $("input#input").val();
    // var num = userInput.split("");
    var output = getRoman(num)
    console.log(num)

    $('#output').text(output);
  });
});


//Back End logic:

// var outputArray = [];

// function romanNum(userInput) {
//   console.log(userInput);
//    for (var i = 0; i < userInput.length; i++){
//     if (userInput === 1){
//       outputArray.push("I");
//     } else if (userInput[i] === 2){
//       outputArray.push("II")
//     }
//     console.log (userInput);
//     console.log(outputArray);
// }
// }
var romNumeral = [
[1000, "M"],
[900, "CM"],
[500, "D"],
[400, "CD"],
[100, "C"],
[90, "XC"],
[50, "L"],
[40, "XL"],
[10, "X"],
[9, "IX"],
[5, "V"],
[4, "IV"],
[1, "I"],
];
var capture = '';

function getRoman (num){
  if (num === 0){
     return '';
   }
   for (var i=0; i < romNumeral.length; i++) {
    if (num >= romNumeral[i][0]) {
      return romNumeral[i][1] + getRoman(num - romNumeral[i][0]);

    }

  }
}
