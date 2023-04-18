//importing employee constructor
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email, github) {
        //using employee properties for engineer
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    // overriding parent role
    getRole() {
        return "Engineer";
    }

};
//exporting Engineer constructor
module.exports = Engineer;