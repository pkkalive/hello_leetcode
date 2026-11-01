/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Infinity;
    let sum = 0;
    for (const x of nums) {
        sum += x;
        if (x < min) min = x;
    }
    return sum - min * nums.length;
};