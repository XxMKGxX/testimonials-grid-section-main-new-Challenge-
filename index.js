// .slice function

var message = prompt("Feel free to write up to 180 characters.")
var messageCount = message.slice(0, 140)
alert(messageCount)

/* This allows the alert to
        return the content written inside the propmt
        for it to reach up 140 characters.*/

var messageCount = message.length
var finale = 180 - messageCount
alert(messageCount + "have been written")
alert("You have written " + messageCount + " characters. You have " + finale + " characters left")

var name = "Conrad"
name.slice(0, 3)

// toUppercase() function

/* This allows the words written to be put in uppercase even though they are written in lowercase*/

//Example:

var name = "Conrad";
name.toUpperCase();

//RESULT: CONRAD(this will be found inside the console.)

/* Although this was written inside the console, the contentfor it to be UpperCase is stil lost.
 The good thing is that it can be fixed by giving that name.toUpperCase() a variable.*/
// Example:
name = name.toUpperCase();
// this will definately fix it.
// Challenge: make the first letter of a name cappped and the rest uncapped
var name = prompt("What is your name?");
var cappedLetter = name.slice(0, 1);
var uncappedLetter = name.slice(1, name.length);
var cL = cappedLetter.toUpperCase();
var uL = uncappedLetter.toLowerCase();
alert("Hello, " + cL + uL);