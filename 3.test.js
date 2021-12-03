const solve = require('./3');
const input = require('./3.input.json');

const exampleIn = ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010'];

// it('example - part 1', () => {
//     expect(solve.part1(exampleIn).gamma).toEqual('10110');
//     expect(solve.part1(exampleIn).epsilon).toEqual('01001');
//     expect(solve.part1(exampleIn).total).toEqual(198);
// });

// it('actual - part 1', () => {
//     expect(solve.part1(input).gamma).toEqual('100111100011');
//     expect(solve.part1(input).epsilon).toEqual('011000011100');
//     expect(solve.part1(input).total).toEqual(3958484);
// });

// it('example - part 2', () => {
//     expect(solve.part2(exampleIn).oxygen).toEqual('10111');
//     expect(solve.part2(exampleIn).co2).toEqual('01010');
//     expect(solve.part2(exampleIn).lifeSupport).toEqual(230);
// });

it('actual - part 2', () => {
    expect(solve.part2(input).oxygen).toEqual('100101011101');
    expect(solve.part2(input).co2).toEqual('001010100001');
    expect(solve.part2(input).lifeSupport).toEqual(1613181);
});