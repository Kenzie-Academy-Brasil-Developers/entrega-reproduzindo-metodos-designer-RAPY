require('../script');

// Utilizando o newIndexOf()

const arrNumber = [15, 27, 10, 498, 1];
const arrString = ['primeira', 'segunda', 'terceira', 'quarta', '1'];

const newIndexOfNumberOutput = arrNumber.newIndexOf(10);
const newIndexOfNumberFromNegativeOutput = arrNumber.newIndexOf(10, -1);
const indexOfNumberOutput = arrNumber.indexOf(10);

const newIndexOfStringOutput = arrString.newIndexOf('primeira', 1);
const indexOfStringOutput = arrString.indexOf('primeira', 1);

test("Utilizando newIndexOf para encontrar o index de um number", () => {
    expect(newIndexOfNumberOutput).toStrictEqual(indexOfNumberOutput);
    expect(newIndexOfNumberOutput).toStrictEqual(2);
    expect(newIndexOfNumberFromNegativeOutput).toStrictEqual(-1);
});

test("Utilizando newIndexOf para encontrar o index de uma string", () => {
    expect(newIndexOfStringOutput).toStrictEqual(indexOfStringOutput);
    expect(newIndexOfStringOutput).toStrictEqual(-1);
});
