require('../script');

// Utilizando o newEvery()

const firstArrToCheck = [10, 2, 3];
const secondArrToCheck = [1, 12, 13];

const mockCompareEvery = jest.fn((element) => element <= 10);

const resultFirstNewEvery = firstArrToCheck.newEvery(mockCompareEvery, firstArrToCheck);
const resultFirstEvery = firstArrToCheck.every(mockCompareEvery);

const resultSecondNewEvery = secondArrToCheck.newEvery(mockCompareEvery);
const resultSecondEvery = secondArrToCheck.every(mockCompareEvery);

test("Cria resultado se existe um valor que cumpre o pedido no newEvery()", ()=>{
    expect(resultFirstNewEvery).toStrictEqual(resultFirstEvery);
    expect(resultFirstNewEvery).toStrictEqual(true);

})
test("Cria resultado se existe um valor que cumpre o pedido no newEvery()", ()=>{
    expect(resultSecondNewEvery).toStrictEqual(resultSecondEvery);
    expect(resultSecondNewEvery).toStrictEqual(false);
})