// initialize my age
const myAge = 30;

// holds the first two years of a dog's life
let earlyYears = 2;

// multiply earlyYears by 10.5
earlyYears *= 10.5;

// Subtract 2 from my age
let laterYears = myAge - 2;

// multiply laterYears by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Add earlyYears and laterYears
const myAgeInDogYears = earlyYears + laterYears;

// Initialise a variable to my name in lowercase.
const myName = 'Badrudeen'.toLowerCase();

// Use string interpolation to log a summary to the console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);