// Importing Employee constructor
const Employee = require("../lib/Employee");

// Creating employee constructor with object
test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toEqual("object");
})

// Testing methods
test("Testing name.", () => {
    const name = "Dolly";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toEqual(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Dolly", id);
    expect(employeeInstance.id).toEqual(id);
})

test("Testing email.", () => {
    const email = "dolly@gmail.com";
    const employeeInstance = new Employee("Dolly", 2, email);
    expect(employeeInstance.email).toEqual(email);
})



test("Gets name through getName method.", () => {
    const testName = "Dolly";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toEqual(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Dolly", testID);
    expect(employeeInstance.getId()).toEqual(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "dolly@gmail.com";
    const employeeInstance = new Employee("Dolly", 2, testEmail);
    expect(employeeInstance.getEmail()).toEqual(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Dolly", 2, "dolly@gmail.com");
    expect(employeeInstance.getRole()).toEqual(returnValue);
})