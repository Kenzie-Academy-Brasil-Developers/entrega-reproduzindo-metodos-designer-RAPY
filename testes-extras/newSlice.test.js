require('../script');

// Utilizando o newSlice()

const firstArrString = ['primeira', 'segunda', 'terceira', 'quarta'];


test("Utilizando newSlice sem parâmetros", () => {
    expect(firstArrString.newSlice()).toStrictEqual(['primeira', 'segunda', 'terceira', 'quarta']);
});

test("Utilizando newSlice com um parâmetro positivo", () => {
    expect(firstArrString.newSlice(3)).toStrictEqual(['quarta']);
});

test("Utilizando newSlice com dois parâmetros", () => {
    expect(firstArrString.newSlice(2, 3)).toStrictEqual(['terceira']);
});

test("Utilizando newSlice com um parâmetro negativo", () => {
    expect(firstArrString.newSlice(-1)).toStrictEqual(['quarta']);
});