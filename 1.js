const part1 = (arr) => {
    let total = 0;
    arr.reduce((prev, curr) => {
        if (prev && curr > prev) total++;
        return curr;
    });
    return total;
};

const part2 = (arr) => {
    let i, j, windows = [], chunk = 3, total = 0;
    for (i = 0, j = arr.length; i < j; i++) {
        windows.push(arr.slice(i, i + chunk));
    }

    windows.reduce((prev, curr) => {
        let sum = curr.reduce((a, b) => a + b);
        if (prev && sum > prev) total++;
        return sum;
    }, 0);
    return total;
};

module.exports = {
    part1: part1,
    part2: part2
};