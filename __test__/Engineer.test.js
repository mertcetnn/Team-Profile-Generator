const Engineer=require("../lib/engineer")

test("creates engineer object",()=>{
    const engineer=new Engineer();

    expect(engineer.github).toEqual(expect.any(String))
});

test("gets github",()=>{

    const engineer= new Engineer();
    expect(engineer.getGithub()).toEqual(expect.stringContainig(engineer.github.toString()))
});

test("gets role",()=>{
    const engineer=new Engineer();
    expect(engineer.getRole()),toEqual("Engineer")
})