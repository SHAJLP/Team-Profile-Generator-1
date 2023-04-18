//Importing Manager constructor
const Manager = require("../lib/Manager");

//Creating Manager constructor with properties
test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Dolly", 2, "dolly@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toEqual(testOfficeNumber);
});

// Testing methods
test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Dolly", 2, "dolly@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toEqual(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Dolly", 2, "dolly@gmail.com", 2);
    expect(employeeInstance.getRole()).toEqual(returnValue);
});