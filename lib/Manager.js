const Employee = require("../lib/Employee");
// The Manager class `extends` from Employee, and should have these additional properties/behaviors:
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber
    }
    getRole() {
        return this.title;
    }
}
// officeNumber
// getRole() (Overridden to return 'Manager') 

module.exports = Manager;