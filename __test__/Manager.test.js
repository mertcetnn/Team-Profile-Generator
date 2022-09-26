const Manager=require("../lib/manager")

test("creates manager object",()=>{
    const manager=new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role',()=>{
    const manager=new Manager();
    expect(manager.getRole()).toEqual("Manager")


})
