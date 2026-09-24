/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let digitSum = 0, num = nums[i];
        while (num) {
            digitSum += num % 10;  // bitwise: (num & 0xF) for hex only
            num = num / 10 | 0;    // bitwise floor division
        }
        if (digitSum === i) return i;
    }
    return -1;
};