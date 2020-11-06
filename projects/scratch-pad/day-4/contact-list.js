// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

//returning an object that adds the values, for id, first name and last name to their respective keys
return {
    id ,
    nameFirst ,
    nameLast
}
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //creating an array that holds the contacts
    var contacts = [];
    //returning the manage-contacts objects
    return {
        // we implemented the length api for you //
        length() {
            return contacts.length;
        },
        //a function that takes contact as argument and uses
        // .push method to add contact to contacts array
        addContact(contact) {
            return contacts.push(contact);
        },
        /*creating a function findContact that takes the full name as the parameter*/
        findContact(fullName) {
            //create an if else statement that checks to see if fullName equals to nameFirst and nameLast concatenated
            for (var i = 0; i < contacts.length; i++) {
                //create an if state to check the argument fullName is equal to the strings nameFirst and nameLast
                //of contacts concatenated equals full name
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    return contacts[i]
                } else {
                    return undefined
                }
            }
        },
        removeContact(contact){
            for (var i = 0; i < contacts.length; i++) {
                if (contact === contacts[i]) {
                    contacts.splice(i, 1)
                }
            }
        },
        printAllContactNames() {
            var fullNameArray = []
         for (var i = 0; i < contacts.length; i++){
             fullNameArray.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`)
         } return fullNameArray.join('\n')  
        }
    }


}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
