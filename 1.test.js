const solve = require('./1');
const input = require('./1.input.json');

const exampleIn = [199,200,208,210,200,207,240,269,260,263];

it('example', () => {
    expect(solve.part1(exampleIn)).toEqual(7);
    expect(solve.part2(exampleIn)).toEqual(5);
});

it('actual', () => {
    expect(solve.part1(input)).toEqual(1521);
    expect(solve.part2(input)).toEqual(1543);
});