// Randomly generate raceNumber (1000 or below 1000)
let raceNumber = Math.floor(Math.random() * 1000);

// variable that indicates whether a runner registered early or not.
let registeredEarly = false;

// variable that holds runners age
let runnerAge = 17;

// control flow that checks whether the runner registered early and is an adult.
if (registeredEarly && runnerAge > 18) {
    // add 1000 to generated raceNumber
    raceNumber += 1000;
}

// control flow that checks age and registration time to determine race time.
if (runnerAge > 18 && registeredEarly) {
    console.log(`Your race number is ${raceNumber}. You'll race at 9:30am. Thank you.`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Your race number is ${raceNumber}. You'll race at 11:00am. Thank you.`);
} else if (runnerAge < 18) {
    console.log(`Your race number is ${raceNumber}. You'll race at 12:30pm. Thank you.`);
} else {
    console.log(`You currently don't have a race schedule. Kindly contact the registration desk. Thank you.`);
}