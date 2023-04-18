//importing employee constructor
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //using employee properties for Manager
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    // overriding Emplyoyee method
    getRole() {
        return "Manager";
    }
}
//exporting Manager constructor
module.exports = Manager;