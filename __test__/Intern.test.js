const Employee = require("../lib/employe");
const Intern = require("../lib/intern");
// we create intern object and adding school
test("Creates intern object ", () => {
  const intern = new Intern(
    "mert",
    234,
    "email@gmail.com",
    "Columbia University"
  );
  expect(intern.internSchool).toEqual(expect.any(String));
});

test("take school inf", () => {
  const intern = new Intern(
    "mert",
    234,
    "email@gmail.com",
    "Columbia University"
  );
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.internSchool.toString())
  );
});

test("gets role", () => {
  const intern = new Intern();
  expect(intern.getRole()).toEqual("Intern");
});
