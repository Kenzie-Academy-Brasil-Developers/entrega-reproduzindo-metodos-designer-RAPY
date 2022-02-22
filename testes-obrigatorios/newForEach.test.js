require("../script");

// Fazendo uma soma com newForEach

const arrNewForEach = [0, 10, 20];

let counterNewForEach = 0;
let counterForEach = 0;

const mockSumCounter = jest.fn((number, counter) => counter += number);

arrNewForEach.newForEach((number) => mockSumCounter(number, counterNewForEach));
arrNewForEach.forEach((number) => mockSumCounter(number, counterForEach));

test("Somando valores de um array utilizando o newForEach()", () =>{
    expect(counterNewForEach).toStrictEqual(counterForEach);
});

//Trocando valores de um array com newForEach

const arrToChangeNewForEach = [0, 10, 20];
const arrToChangeForEach = [0, 10, 20];

const mockArrChange = jest.fn((number, index, arr) => arr[index] = number + 10);

arrToChangeNewForEach.newForEach((number, index, arr) => mockArrChange(number, index, arr), arrToChangeForEach);
arrToChangeForEach.forEach((number, index, arr) => mockArrChange(number, index, arr), arrToChangeForEach
);

test("Mudando os valores de um array utilizando o newForEach", () =>{
    expect(arrToChangeNewForEach).toStrictEqual(arrToChangeForEach);
});