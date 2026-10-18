/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const MOD = 1000000007n;
    const n = nums.length;

    const C = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0n));
    for (let i = 0; i <= n; i++) {
        C[i][0] = 1n;
        for (let j = 1; j <= i; j++) {
            C[i][j] = (C[i - 1][j - 1] + (j <= i - 1 ? C[i - 1][j] : 0n)) % MOD;
        }
    }

    const count = (arr) => {
        if (arr.length <= 2) return 1n;
        const root = arr[0];
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
            (arr[i] < root ? left : right).push(arr[i]);
        }
        let res = C[left.length + right.length][left.length];
        res = (res * count(left)) % MOD;
        res = (res * count(right)) % MOD;
        return res;
    };

    return Number((count(nums) - 1n + MOD) % MOD);
};