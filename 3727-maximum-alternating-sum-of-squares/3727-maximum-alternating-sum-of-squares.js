/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    const sq = new Float64Array(nums.length);
    for (let i = 0; i < nums.length; i++) sq[i] = nums[i] * nums[i];
    sq.sort();
    const neg = nums.length >> 1;
    let score = 0;
    for (let i = 0; i < neg; i++) score -= sq[i];
    for (let i = neg; i < sq.length; i++) score += sq[i];
    return score;
};