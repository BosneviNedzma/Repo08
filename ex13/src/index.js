const randomInteger = require("../../ex12/src");

// Only change code below this line
   function randomRangeNumber (minNumber, maxNumber) {
       Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      return Math.random;
   }
   
    console.log(randomRangeNumber());
// Only change code above this line
module.exports = randomRangeNumber;
