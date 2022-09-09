

const employe=require('../lib/employe')

test('employe', ()=>{
    const i = new employe()
    expect(typeof(i)).toBe("object")



}


)


//passsed test example
test('employe name',
()=>{
    const i = new employe('bob')
    expect(i.name).toBe('bob')



}
)
// couldnt pass example

test('employe name',
()=>{
    const i = new employe('bob')
    expect(i.name).toBe('leks')



}
)