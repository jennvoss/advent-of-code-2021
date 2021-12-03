const getCols = (arr) => {
    let cols = [];
    arr.map(n => n.split('')).map(arr => {
        arr.map((n,i) => {
            if (!cols[i]) cols[i] = [];
            cols[i].push(n);
        });
    });
    return cols;
};
const flip = n => n === '0' ? '1' : '0';
const sum = a => a.reduce((a,b) => Number(a) + Number(b));
const getMostCommon = arr => {
    // return the most common digit per column
    let cols = getCols(arr);
    let len = cols[0].length;
    return cols.map(sum).map(i => i >= (len / 2) ? '1' : '0');
}

const part1 = (arr) => {
    let mostCommon = getMostCommon(arr);
    const gamma = mostCommon.join('');
    const epsilon = mostCommon.map(flip).join('');

    return {
        gamma: gamma,
        epsilon: epsilon,
        total: parseInt(gamma, 2) * parseInt(epsilon, 2)
    }
};

const part2 = (arr) => {
    function getLast(rating, arr, i=0) {    
        let bits = rating === 'o2' ? getMostCommon(arr) : getMostCommon(arr).map(flip);
        let keep = [];
        
        arr.map(n => {
            if (n[i] === bits[i]) keep.push(n);
        });

        return keep.length === 1 ? keep[0] : getLast(rating, keep, i + 1);
    }

    let oxygen = getLast('o2', arr); 
    let co2 = getLast('c02', arr);

    return {
        oxygen: oxygen,
        co2: co2,
        lifeSupport: parseInt(oxygen, 2) * parseInt(co2, 2)
    }
};

module.exports = {
    part1: part1,
    part2: part2
};