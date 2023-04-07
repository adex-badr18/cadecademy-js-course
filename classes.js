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

// create a nurse instance
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5); // take 5 days vacation
console.log(nurseOlynyk.remainingVacationDays); // get remaining vacation days