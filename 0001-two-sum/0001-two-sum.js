/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = {}, len = nums.length;
    for (let i = 0;  i < len; i++){
        const curr_idx = numsMap[nums[i]]
        if (curr_idx >= 0){
            return [curr_idx, i];
        } else {
            numsMap[target - nums[i]] = i;
        }
    }
};