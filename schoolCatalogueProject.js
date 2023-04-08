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

class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }

    set pickupPolicy(pickupPolicy) {
        this._pickupPolicy = pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);
    }
}

class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }

    addSportsTeam(teamName) {
        this._sportsTeams.push(teamName);
    }
}