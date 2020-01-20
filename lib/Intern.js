const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email , school){
        super(name, id, email, "Intern");
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Intern;
// The Intern class `extends` from Employee, and should have these additional properties/behaviors:

// school
// getSchool()
// getRole() (Overridden to return 'Intern')