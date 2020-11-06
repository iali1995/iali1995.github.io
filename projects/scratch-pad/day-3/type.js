// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //beginning an if-else conditional to use Array.isArray
    if (Array.isArray(value)) {
        //returning true since the statement above is true
        return true
        //if the statement is not true then returning false
    } else return false
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //creating if state with Array.isArray() to determine if value is an array then returning false if it isn't
    if (Array.isArray(value) === true) {
        return false
        //creating an if statement to make sure value is null, and if so then returning false
    } else if (value === null) {
        return false
        //using instanceof Date to check if value is date then returning false
    } else if (value instanceof Date) {
        return false
        //afterall other data types are filtered out, checking to see if value is indeed an object
    } else if (typeof value === 'object') {
        return true
        //finally, returning false no criteria applies
    } else {
        return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //begin an if-else statement with the first expression to see if object is an array
    if (Array.isArray(value)||isObject(value)) {
        return true
    } return false
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === 'string') {
        return 'string'
    } else if (typeof value === 'number') {
        return 'number'
    } else if (typeof value === 'boolean') {
        return 'boolean'
    } else if (typeof value === 'undefined') {
        return 'undefined'
    } else if (typeof value === 'function') {
        return 'function'
    } else if (Array.isArray(value)) {
        return 'array'
    } else if (value === null) {
        return 'null'
    } else if (value instanceof Date) {
        return 'date'
    } else if (value === 'object') {
        return 'object'
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
