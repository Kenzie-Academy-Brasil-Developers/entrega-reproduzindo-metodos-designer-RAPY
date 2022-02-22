require('../script');

// Utilizando o newSome()

const firstArrToCheck = [10, 2, 3];
const secondArrToCheck = [1, 12, 13];

const mockCompareSome = jest.fn((element) => element > 10);

const resultFirstNewSome = firstArrToCheck.newSome(mockCompareSome, firstArrToCheck);
const resultFirstSome = firstArrToCheck.some(mockCompareSome, firstArrToCheck);

const resultSecondNewSome = secondArrToCheck.newSome(mockCompareSome);
const resultSecondSome = secondArrToCheck.some(mockCompareSome);

test("Cria resultado se existe um valor que cumpre o pedido no newSome()", ()=>{
    expect(resultFirstNewSome).toStrictEqual(resultFirstSome);
    expect(resultFirstNewSome).toStrictEqual(false);

})
test("Cria resultado se existe um valor que cumpre o pedido no newSome()", ()=>{
    expect(resultSecondNewSome).toStrictEqual(resultSecondSome);
    expect(resultSecondNewSome).toStrictEqual(true);
})