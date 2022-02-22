require('../script');

// Utilizando o newJoin()

const firstArrString = ['primeira', 'segunda'];
const secondArrString = ['terceira', 'quarta'];

test("Utilizando newJoin para concatenar dois arrays em uma palavra separada por espaços.", () => {
    const newJoinFirstOutput = firstArrString.newJoin(' ');
    expect(newJoinFirstOutput).toStrictEqual('primeira segunda');
});

test("Utilizando newJoin para concatenar dois arrays em uma palavra sem separador.", () => {
    const newJoinSecondOutput = secondArrString.newJoin();
    expect(newJoinSecondOutput).not.toStrictEqual('terceira quarta');
});
