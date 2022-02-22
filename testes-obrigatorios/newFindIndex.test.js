require('../script');

// Utilizando o newFindIndex

const arrToFindIndexNumber = [15, 27, 10, 498, 1];
const arrToFindIndexString = ['primeira', 'segunda', 'terceira', 'quarta', '1'];
const arrToFindIndexFail = [15, 27, 10, 1];

const mockFirstFindIndexCallback = jest.fn(element => element > 16);
const mockSecFindIndexCallback = jest.fn(element => element.length === 8);
const mockThiFindIndexCallback = jest.fn(element => element > 100);

const newFindIndexNumberOutput = arrToFindIndexNumber.newFindIndex(mockFirstFindIndexCallback, arrToFindIndexNumber);
const findIndexNumberOutput = arrToFindIndexNumber.findIndex(mockFirstFindIndexCallback);

const newFindIndexStringOutput = arrToFindIndexString.newFindIndex(mockSecFindIndexCallback);
const findIndexStringOutput = arrToFindIndexString.findIndex(mockSecFindIndexCallback);

test("Utilizando newFindIndex para encontrar um número", () => {
    expect(newFindIndexNumberOutput).toStrictEqual(findIndexNumberOutput);
    expect(arrToFindIndexNumber.newFindIndex(mockThiFindIndexCallback)).toStrictEqual(arrToFindIndexNumber.findIndex(mockThiFindIndexCallback));
    expect(arrToFindIndexFail.newFindIndex(mockThiFindIndexCallback)).toStrictEqual(-1);
});

test("Utilizando newFindIndex para encontrar uma string", () => {
    expect(newFindIndexStringOutput).toStrictEqual(findIndexStringOutput);
});
