// School
// Properties: name(string), level(one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents(number)
// Getters: all properties have getters
// Setters: the numberOfStudents property has a setter
// Methods: .quickFacts() and .pickSubstituteTeacher()(this is a static method)

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
        returnthis._numberOfStudents;
    }

    set numberOfStudents(studentCount) {
        this._numberOfStudents = studentCount;
    }

    quickFacts() {

    }

    static pickSubstituteTeacher() {

    }
}