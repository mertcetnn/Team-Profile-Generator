// using constructor//
const Employee = require("../lib/employe");

test("Creates employe ", () => {
  const employee = new Employee("mert", 234, "email@gmail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// testing employee name//

test("employe name", () => {
  const employee = new Employee("john");
  expect(employee.getName()).toEqual(expect.any(String));
});
// testing employee id/
test("employee id", () => {
  const employee = new Employee("john", 4543);
  expect(employee.getId()).toEqual(expect.any(Number));
});
// testing employee email//
test("employe email", () => {
  const employee = new Employee("mert", 234, "email@gmail.com");
  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("role", () => {
  const employee = new Employee("Employee");
  expect(employee.getRole()).toEqual("Employee");
});
