const Engineer = require("../lib/engineer");

test("creates engineer object", () => {
  const engineer = new Engineer(
    "mert",
    234,
    "email@gmail.com",
    "GerrardsGithub"
  );

  expect(engineer.partnerGithub).toEqual(expect.any(String));
});

test("gets partnerGithub", () => {
  const engineer = new Engineer(
    "mert",
    234,
    "email@gmail.com",
    "GerrardsGithub"
  );
  expect(engineer.partnerGithub).toEqual(
    expect.stringContaining(engineer.partnerGithub.toString())
  );
});

test("gets role", () => {
  const engineer = new Engineer();
  expect(engineer.getRole()).toEqual("Engineer");
});
