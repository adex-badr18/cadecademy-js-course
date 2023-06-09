class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    // getter
    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    // static methods: can only be accessed thru the class name e.g. HospitalEmployee.generatePassword
    static generatePassword() {
        return Math.floor(Math.random() * 10000);
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    // getter
    get certifications() {
        return this._certifications;
    }

    // method to add certification
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }

    get insurance() {
        return this._insurance;
    }

    addInsurance(newInsurance) {
        this._insurance.push(newInsurance);
    }
}

// create a nurse instance
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5); // take 5 days vacation
console.log(nurseOlynyk.remainingVacationDays); // get remaining vacation days

// add new certification to nurseOlynyk
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

// create a doctor instance
const doctorJohn = new Doctor('John', ['Car Insurance', 'House Insurance']);
doctorJohn.addInsurance('Health Insurance');
doctorJohn.takeVacationDays(10);

console.log(doctorJohn.remainingVacationDays);
console.log(doctorJohn.insurance);