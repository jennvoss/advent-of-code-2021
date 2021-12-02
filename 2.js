const part1 = (arr) => {
    let loc = {
        forward: 0, 
        down: 0, 
        up: 0
    }
    arr.map(i => i.split(' ')).map(a => {
        loc[a[0]] += Number(a[1]);
    });
    loc.depth = loc.down - loc.up;
    loc.total = loc.forward * loc.depth;
    return loc;
};

const part2 = (arr) => {
    let loc = {
        forward: 0, 
        down: 0, 
        up: 0,
        depth: 0,
        aim: 0
    }
    arr.map(i => i.split(' ')).map(a => {
        let dir = a[0], val = Number(a[1]);

        loc[dir] += Number(val);

        if (dir === 'down') { loc.aim += val; }
        if (dir === 'up') { loc.aim -= val; }
        if (dir === 'forward') { loc.depth += (loc.aim * val); }
    });
    loc.total = loc.forward * loc.depth;
    return loc;
};

module.exports = {
    part1: part1,
    part2: part2
};