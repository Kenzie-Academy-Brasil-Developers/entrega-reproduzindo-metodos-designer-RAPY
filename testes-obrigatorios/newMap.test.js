require("../script");

//Usando map para criar um novo array

const arrNewMapToSum = [1, 2, 3];

const mockSumCounter = jest.fn((element) => element + 5);

const arrSumNewMap = arrNewMapToSum.newMap(mockSumCounter, arrNewMapToSum);
const arrSumMap = arrNewMapToSum.map(mockSumCounter, arrNewMapToSum);

test("Cria um novo array somando todos os novos números do array usando o newMap()", ()=>{
    expect(arrSumNewMap).toStrictEqual(arrSumMap);
})
test("Verificação se após o uso do newMap() foi gerado um novo array", ()=>{
    expect(arrSumNewMap).not.toBe(arrNewMapToSum);
})