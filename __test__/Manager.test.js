const Manager = require("../lib/manager");

test("creates manager object", () => {
  const manager = new Manager("mert", 234, "email@gmail.com", 123);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Office Number missing", () => {
  const manager = new Manager();
  expect(manager.officeNumber).toEqual(manager.officeNumber);
});
test("gets role", () => {
  const manager = new Manager();
  expect(manager.getRole()).toEqual("Manager");
});
