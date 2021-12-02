const solve = require('./2');
const input = require('./2.input.json');

const exampleIn = ['forward 5','down 5','forward 8','up 3','down 8','forward 2'];

it('example - part 1', () => {
    expect(solve.part1(exampleIn).forward).toEqual(15);
    expect(solve.part1(exampleIn).depth).toEqual(10);
    expect(solve.part1(exampleIn).total).toEqual(150);
});

it('actual - part 1', () => {
    expect(solve.part1(input).forward).toEqual(2034);
    expect(solve.part1(input).depth).toEqual(702);
    expect(solve.part1(input).total).toEqual(1427868);
});

it('example - part 2', () => {
    expect(solve.part2(exampleIn).forward).toEqual(15);
    expect(solve.part2(exampleIn).depth).toEqual(60);
    expect(solve.part2(exampleIn).total).toEqual(900);
});

it('actual - part 2', () => {
    expect(solve.part2(input).forward).toEqual(2034);
    expect(solve.part2(input).depth).toEqual(770963);
    expect(solve.part2(input).aim).toEqual(702);
    expect(solve.part2(input).total).toEqual(1568138742);
});