var minOperations = function(nums, x) {
    const target = nums.reduce((a, b) => a + b, 0) - x;
    if (target < 0) return -1;
    if (target === 0) return nums.length;

    let left = 0, sum = 0, maxLen = -1;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum > target) sum -= nums[left++];
        if (sum === target) maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen === -1 ? -1 : nums.length - maxLen;
};