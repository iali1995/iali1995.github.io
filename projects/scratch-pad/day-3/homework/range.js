// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //create an array to hold the range of the numbers
    let arr = []
    //start an if else state that checks if start number is greater than end number
    if (start > end) { 
        //creating a for loop to move backwards from the value of start to the value of end
        for (var i = start; i >= end; i--){
            //use arr.push to add each value of i into the arr
            arr.push(i)
        }
        //then the else if statement for if start is less then end
        } else if (start < end) {
            //create a for loop that goes through each digit from start to end
            for (var i = start; i <= end; i++) {
                //and uses .push to add them to the array
                arr.push(i)
            }
        }
    
    //return the final array
    return arr
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
