// Creating Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Creating methods
    getName () {
        return this.name;
    }
    
    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole() {
        return "Employee"
    }

}
//exporting Employee constructor
module.exports = Employee;