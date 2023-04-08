class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;

    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(studentCount) {
        if (typeof studentCount !== 'number') {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }

        this._numberOfStudents = studentCount;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }

    set pickupPolicy(pickupPolicy) {
        this._pickupPolicy = pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        console.log(this._sportsTeams);
    }

    addSportsTeam(teamName) {
        this._sportsTeams.push(teamName);
    }
}

// Create an instance of PrimarySchool class
console.log();
console.log('******************PrimarySchool Instance******************');
console.log();
const lorraineHansburry = new PrimarySchool('Lorraine Hansburry', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansburry.quickFacts();
const substituteTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(substituteTeacher);
console.log(lorraineHansburry.pickupPolicy);

// create an instance of HighSchool class
console.log();
console.log('******************HighSchool Instance******************');
console.log();
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;
alSmith.addSportsTeam('Football');
alSmith.sportsTeams;