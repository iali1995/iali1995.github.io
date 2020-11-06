// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    /*creating a for loop that iterates through all digits between 1-100
    and then using if-else conditionals to to replace the numbers that 
    meet the fizzbuzz criteria */
    
for (var i = 1; i <= 100; i++){
  /*the first conditional makes sure to check that if i
  is divided by 5 && by 3, that it's remainder === 0 
  and then print FizzBuzz if true*/
    if (i%3 === 0 && i%5 === 0) {
      console.log('FizzBuzz')
    /* Next if the i divided by 3 has a remainder of 0, then printing Fizz*/
    } else if (i%3 === 0) {
      console.log('Fizz')
      //if I divided by 5 has a remainder of 0, then print Buzz
    } else if (i%5 === 0) {
      console.log('Buzz')
      //lastly, if i does not meet any of the conditions listed above, then print it's numerical value
    } else {
      console.log(i)
    }
  }
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}