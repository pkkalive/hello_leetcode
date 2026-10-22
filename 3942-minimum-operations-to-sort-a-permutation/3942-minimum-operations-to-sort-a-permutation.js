/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    const k = nums[0];
    let isRot = true, isRevRot = true;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== (k + i) % n) isRot = false;
        if (nums[i] !== ((k - i) % n + n) % n) isRevRot = false;
        if (!isRot && !isRevRot) return -1;
    }
    let ans = Infinity;
    if (isRot) {
        ans = Math.min(ans, (n - k) % n, k + 2);
    }
    if (isRevRot) {
        const m = (k + 1) % n;
        ans = Math.min(ans, m + 1, 1 + (n - m) % n);
    }
    return ans;
};