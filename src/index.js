// var myName;
// var a;
// a = 7;
// var b;
// b = a
// var a  =9;
var myFirstName = "Abhishek"
var myLastName = "Shukla"
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
let catName = "Oliver";
let catSound = "Meow!";
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 11;

// Only change code below this line
myVar--;
const myDecimal = 5.7;

// Only change code below this line
const product = 2.0 * 3.0 - 1;
const quotient = 4.4 / 2.0; // Change this line
const remainder = 11 % 3;
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *=  5;
b *= 3;
c *=  10;
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /=  4;
c /=  11;
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
const myStr = "This is the start."+" "+"This is the end."; // Change this line
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// Only change code below this line
const myName = "Abhishek Shukla";
const myStr = "My name is " + myName + "and I am well!";
// Change code below this line
const someAdjective = "Something awsome feeling ";
let myStr = "Learning to code is ";
myStr += someAdjective;
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun +" " + myVerb+" " + myAdjective+" " +myAdverb ; // Change this line
// Only change code above this line
// Only change code below this line
const myArray = ["peanut butter", 2, "bread"];
// Only change code below this line
const myArray = [["Bulls", 23], ["White Sox", 45]];
const myArray = [50, 60, 70];
var myData = myArray[0];
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()
// Only change code below this line
// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
// Only change code below this line
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// console.log(d)
// Only change code below this line
const myList = [["Banana", 3], ["Apple", 4], ["Orange", 5], ["Peach", 6], ["Pineaple", 7]];
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction()
  function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  functionWithArgs(1,2);
  function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(5);
  // Declare your variable here
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
function myLocalScope() {
    var myVar
    // Only change code below this line
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = 'sweater';
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)
function nextInLine(arr, item) {
    // Your code here
  
    var queue = arr.push(item);
  
    var removeItem = arr.shift();
  
    return removeItem;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));
function welcomeToBooleans() {
// Only change code below this line

return true; // Change this line

// Only change code above this line

}
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
    return "Yes, it's true";
    }
    return "No, it's false";
    }
    
    // Setup
    function trueOrFalse(myCondition) {
    
    // Only change code below this line.
    if(myCondition) {
    return "Yes, that was true";
    }
    return "No, that was false";
    
    // Only change code above this line.
    
    }
    
    // Change this value to test
    trueOrFalse(5>2);
    trueOrFalse(5<2);
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testEqual(10);
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testStrict(10);
//Practice comparing different values

//The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal

//solution

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testNotEqual(10);
// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line
  
    if (val !== 17) {
  
    // Only Change Code Above this Line
  
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testStrictNotEqual(10);  
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);