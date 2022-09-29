const Intern = require("../lib/intern");
// we creat intern object and adding school
test("Creates intern object ", () => {
  const intern = new Intern();
  expect(intern.school).toEqual(expect.any(String));
});

test("take school inf", () => {
  const intern = new Intern();
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets role", () => {
  const intern = new Intern();
  expect(intern.getRole()).toEqual("Intern");
});
