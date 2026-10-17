/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const digitSum = (x) => {
        let s = 0;
        while (x > 0) {
            s += x % 10;
            x = (x - (x % 10)) / 10;
        }
        return s;
    };

    const keys = new Array(n);
    for (let i = 0; i < n; i++) keys[i] = digitSum(nums[i]);

    const order = new Array(n);
    for (let i = 0; i < n; i++) order[i] = i;
    order.sort((a, b) => keys[a] - keys[b] || nums[a] - nums[b]);

    const visited = new Uint8Array(n);
    let swaps = 0;
    for (let i = 0; i < n; i++) {
        if (visited[i] || order[i] === i) continue;
        let len = 0;
        let j = i;
        while (!visited[j]) {
            visited[j] = 1;
            j = order[j];
            len++;
        }
        swaps += len - 1;
    }
    return swaps;
};