// today's forecast
const kelvin = 0;

// convert kelvin into celsius by subtracting 273
const celsius = kelvin - 273;

// converts celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// round down the fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Logs the result of fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
