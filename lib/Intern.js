//importing employee constructor
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        //using employee properties for Intern
        super (name, id, email);
        this.school = school;        
    }

    getSchool() {
        return this.school;
    }
    // overriding Emplyoyee method
    getRole () {
        return "Intern"
    }
}
//exporting Intern constructor
module.exports = Intern;
