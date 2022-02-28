require('../script');

// Utilizando o newConcat()

const firstArrString = ['primeira', 'segunda'];
const secondArrString = ['terceira', 'quarta'];

const newConcatOutput = firstArrString.newConcat(secondArrString);
const noConcatOutput = firstArrString.newConcat();

test("Utilizando newConcat para juntar dois arrays", () => {
    expect(newConcatOutput).toStrictEqual(['primeira', 'segunda', 'terceira', 'quarta']);
    expect(noConcatOutput).toStrictEqual(firstArrString);
});

test("verificando se o array é mantido o mesmo.", () => {
    expect(newConcatOutput).not.toBe(firstArrString);
});