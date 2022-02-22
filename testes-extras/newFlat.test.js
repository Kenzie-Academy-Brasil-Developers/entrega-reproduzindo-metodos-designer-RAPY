require('../script');

// Utilizando o newFlat()

const firstArr = [1, 2, 3, [4, 5, [6]]];


test("Utilizando newFlat sem parâmetros", () => {
    expect(firstArr.newFlat()).toStrictEqual([1, 2, 3, 4, 5, [6]]);
});

test("Utilizando newFlat com parâmetro", () => {
    expect(firstArr.newFlat(2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("Forçando o newFlat com parâmetro maior que o número de arrays internos", () => {
    expect(firstArr.newFlat(31)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});