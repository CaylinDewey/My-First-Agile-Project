/*
const company = "Big Bucks co.";
let profit = 900;
let financeManager ="Richard";

if (profit < 1000) {
var richardFired = true;
financeManager = "Fay";
} 

console.log(company);
console.log(financeManager);
console.log(richardFired);

let quote = "Our greatest glory is not in never falling, but in rising every time we fall.";
let meaningOfLife = "42";
let oneEqualsTwo = "false";

console.log(meaningOfLife);

let stringWithQuotes = 'Confucius once said, "It does not matter how slowly you go, as long as you do not stop."';
let stringWithApostrophe = "Everything you've ever wanted is on the other side of fear.";

// These lines will log your quotes to the console:
console.log(stringWithQuotes);
console.log(stringWithApostrophe);
let singleQuotedString = 'He\'s a wild one, that single quoted string...';
let doubleQuotedString = "Confucius say, \"Many backslash make code sad.\"";

let haiku = "Power down your brain\nMotion will now take over\nRide this inertia";

// This will log your haiku to the console:
console.log(haiku);

let name = "Bilbo Baggins";
let home = "Bag End";

console.log(`${name} lives at ${home}`);

let myVar = 'a variable!'
let myString = 'This string contains ' + myVar;

console.log(myString);  // This string contains a variable!

let greeting = "Hello";
let name = "Marcus";

let fullGreeting = greeting + ', ' + name + '!';
console.log(fullGreeting);  // Hello, Marcus! 

let fruits = ['apple', 'orange', 'banana'];
let myHtml = '<ol>';

for (let i = 0; i < fruits.length; i++) {
  myHtml = myHtml + '<li>' + fruits[i] + '</li>';
}
myHtml += '</ol>';
console.log(myHtml);
*/

let fruits = ['apple', 'orange', 'banana'];
let myHtml = '<ol>';

for (let i = 0; i < fruits.length; i++) {
  myHtml += `<li>${fruits[i]}</li>`;
}
myHtml += '</ol>';
console.log(myHtml);
