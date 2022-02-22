require('../script');

// Utilizando o newReduce()

const arrToReduce = [1, 2, 3];

const mockSumCounter = jest.fn((previous, current) => previous + current, 0);

const resultNewReduce = arrToReduce.newReduce(mockSumCounter);
const resultReduce = arrToReduce.reduce(mockSumCounter);

test("Cria resultado da soma de todos os novos números do array usando o newReduce()", ()=>{
    expect(resultNewReduce).toStrictEqual(resultReduce);
})
test("Verificação se após o uso do newReduce() foi gerado um novo array", ()=>{
    expect(resultNewReduce).not.toBe(arrToReduce);
})