require('../script');

// Fazendo um filtro com o newFilter()

const arrToFilter = [0, 10, 20];

const mockFilterCallback = jest.fn((element) => element >= 10);

const filteredByNewFilter = arrToFilter.newFilter(mockFilterCallback, arrToFilter);
const filteredByFilter = arrToFilter.filter(mockFilterCallback)

test("Filtrando um array utilizando o newFilter", () =>{
    expect(filteredByNewFilter).toStrictEqual(filteredByFilter);
});

test("Verificando se o newFilter retorna um novo array", () =>{
    expect(filteredByNewFilter).not.toBe(arrToFilter);
});
