/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let less = 0, equal = 0;
    for (const n of nums) {
        if (n < target) less++;
        else if (n === target) equal++;
    }
    const res = [];
    for (let i = 0; i < equal; i++) res.push(less + i);
    return res;
};