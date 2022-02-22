require('../script');

// Utilizando o newFind

const arrToFindNumber = [15, 27, 10, 498, 1];
const arrToFindString = ['primeira', 'segunda', 'terceira', 'quarta', '1'];
const arrToFindUndefined = [];

const mockFirstFindCallback = jest.fn(element => element > 16);
const mockSecFindCallback = jest.fn(element => element.length === 8);
const mockThiFindCallback = jest.fn(element => element > 100);

const newFindNumberOutput = arrToFindNumber.newFind(mockFirstFindCallback, arrToFindNumber);
const findNumberOutput = arrToFindNumber.find(mockFirstFindCallback);

const newFindStringOutput = arrToFindString.newFind(mockSecFindCallback);
const findStringOutput = arrToFindString.find(mockSecFindCallback);

test("Utilizando newFind para encontrar um número", () => {
    expect(newFindNumberOutput).toStrictEqual(findNumberOutput);
    expect(arrToFindNumber.newFind(mockThiFindCallback)).toStrictEqual(arrToFindNumber.find(mockThiFindCallback));
    expect(arrToFindUndefined.newFind(mockThiFindCallback)).toStrictEqual(undefined);
});

test("Utilizando newFind para encontrar uma string", () => {
    expect(newFindStringOutput).toStrictEqual(findStringOutput);
});
