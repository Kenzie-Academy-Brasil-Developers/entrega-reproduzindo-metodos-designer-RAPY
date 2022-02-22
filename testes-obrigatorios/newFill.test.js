require('../script');

// Utilizando newFill()

const arrToFill = [1, 2, 3];

const fillByNewFill = arrToFill.newFill(4);
const fillByFill = arrToFill.fill(4)

test("Utilizando o Fill e o newFill", () =>{
    expect(fillByNewFill).toStrictEqual(fillByFill);
});

test("Verificando valor do newFill", () =>{
    expect(fillByNewFill).toStrictEqual([4, 4, 4]);
});
