require('../script');

// Utilizando o newFlatMap()

const firstArr = [1, 2, 3, 4];

const firstMockFn = jest.fn((x) => [x * 2]);
const secondMockFn = jest.fn((x) => [[x * 2]]);

test("Utilizando newFlatMap com a primeira função", () => {
    expect(firstArr.newFlatMap(firstMockFn)).toStrictEqual([2, 4, 6, 8]);
});

test("Utilizando newFlatMap com a segunda função", () => {
    expect(firstArr.newFlatMap(secondMockFn)).toStrictEqual([[2], [4], [6], [8]]);
});
