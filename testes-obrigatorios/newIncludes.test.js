require('../script');

// Utilizando o newIncludes()

const firstArrToCheck = [10, 2, 3];
const secondArrToCheck = [1, 12, 13];

const resultFirstNewIncludes = firstArrToCheck.newIncludes(2);
const resultFirstIncludes = firstArrToCheck.includes(2);

const resultSecondNewIncludes = secondArrToCheck.newIncludes(2);
const resultSecondIncludes = secondArrToCheck.includes(2);

test("Cria resultado se existe um valor que cumpre o pedido no newSome()", ()=>{
    expect(resultFirstNewIncludes).toStrictEqual(resultFirstIncludes);
    expect(resultFirstNewIncludes).toStrictEqual(true);

})
test("Cria resultado se existe um valor que cumpre o pedido no newSome()", ()=>{
    expect(resultSecondNewIncludes).toStrictEqual(resultSecondIncludes);
    expect(resultSecondNewIncludes).toStrictEqual(false);
})