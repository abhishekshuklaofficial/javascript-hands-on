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
  function testLessThan(val) {
    if (val < 24) {  // Change this line
      return "Under 25";
    }
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  // Change this value to test
  testLessThan(10);
  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  // Change this value to test
  testLessOrEqual(10);
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      return 'Yes';
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  
  
  
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    } else{
    return "Between 5 and 10";
    }
  }
  
  testElseIf(7);
// function orderMyLogic(val) {
    function orderMyLogic(val){
        if(val < 5){
            return "Less than 5";
        }
        else if (val < 10){
            return "Less than 10";
        }
        else{
            return "Greater than or equal to 10";
        }
    }
    orderMyLogic(7);
    function testSize(num) {
        // Only change code below this line
      
        if (num < 5) return "Tiny";
      
        else if (num < 10) return "Small";
      
        else if (num < 15) return "Medium";
      
        else if (num < 20) return "Large";
      
        else return "Huge";
      
        // Only change code above this line
      }
      
      // Change this value to test
      testSize(7);
      function golfScore(par, strokes) {
        // Only change code below this line
      
        if (strokes === 1) return "Hole-in-one!";
      
        else if ((strokes - par) <= -2) return 'Eagle';
      
        else if ((strokes - par) === -1) return 'Birdie';
      
        else if (strokes === par) return 'Par';
      
        else if ((strokes - par) === 1) return 'Bogey';
      
        else if ((strokes - par) === 2) return 'Double Bogey';
      
        else return 'Go Home!';
        // Only change code above this line
      }
      
      // Change these values to test
      golfScore(5, 1);  
function caseInSwitch(val) {
var answer = "";
// Only change code below this line

switch (val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
}


// Only change code above this line
return answer;
}

// Change this value to test
caseInSwitch(1);
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  switchOfStuff(1);
  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  sequentialSizes(1);
  function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  chainToSwitch(7);
  function isLess(a, b) {
    // Fix this code
    return a < b;
  }
  
  // Change these values to test
  isLess(10, 15);


// Setup
function abTest(a, b) {
    // Only change code below this line
  
    if (a < 0 || b < 0) return undefined;
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // Change values below to test your code
  abTest(2,2);
  var count = 0;

  function cc(card) {
    // Only change code below this line
  
    var msg = '';
  
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 7:
      case 8:
      case 9:
        count = count;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
  
    if (count === 5) msg = "5 Bet";
    else if (count === 0) msg = "0 Hold";
    else if (count === -5) msg = "-5 Hold";
    else if (count === -1) msg = "-1 Hold";
    else if (count === 1) msg = "1 Bet";
  
  
    return msg;
    // Only change code above this line
  }
  
  // Add/remove calls to test your function.
  // Note: Only the last will display
  cc(2); cc(3); cc(7); cc('K'); cc('A');

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  // Only change code below this line.
  
  var myDog = {
    "name": "Lola",
    "legs": 4,
    "tails": 1,
    "friends": ["Sam", "Sarah"]
  };
  // Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name="Happy Coder"
  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
myDog.bark = "woof"
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;
  // Only change code below this line
// Setup
function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    // Only change code below this line
  
    result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  phoneticLookup("charlie");
  function checkObj(obj, checkProp) {
    // var obj = {
    // gift: "pony",
    // pet: "kitten",
    // bed: "sleigh"
    // };
    if (obj.hasOwnProperty(checkProp)== true){
      return obj[checkProp]
    } else if (obj.hasOwnProperty(checkProp)!== true) {
      return "Not Found"
    } else{
      return "Change Me!"
    }
    return checkProp
    // return checkProp
  
   
  
    // Only change code above this line
  }
  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
   {
      "artist": "Bob",
      "title": "Hello",
      "release_year": 1950,
      "formats": [
        "CS",
        "8T"
      ]
    }
  ];
  // Setup
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  // Only change code below this line
  
  var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
  // Setup
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  // Only change code below this line
  
  var secondTree = myPlants[1].list[1]; // Change this line  
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  // var collectionCopy = JSON.parse(JSON.stringify(collection));
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop]; // If the value is empty remove the prop
    } else if (prop !== "tracks") {
      records[id][prop] = value;
    } else {
      if (!records[id].hasOwnProperty('tracks')) {
        records[id].tracks = [];
        records[id].tracks.push(value);
      } else {
        records[id].tracks.push(value);
      }
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  // Setup
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}
// Only change code below this line
// Setup
const myArray = [];

for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// Only change code below this line
// Setup
const myArray = [];

// Only change code below this line

for (let i = 0; i < 10; i++) {
  if (i%2!=0){
    console.log(i)
    myArray.push(i);
  }
}
// Setup
const myArray = [];

// Only change code below this line
for (let i = 10; i > 0; i--) {
  if (i%2!=0){
    myArray.push(i);
}
}
// Setup
const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// for (let i = 0; i < myArr.length; i++) {
//   console.log(i)
//    console.log(myArr[i]);
// }


// Example

var ourTotal = 0;

for (var i = 0; i < myArr.length; i++) {
  ourTotal += myArr[i];
}

// Setup
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
// Only change code below this line