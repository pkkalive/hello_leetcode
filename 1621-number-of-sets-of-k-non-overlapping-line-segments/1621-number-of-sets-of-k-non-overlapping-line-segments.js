/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1000000007;
    let prev = new Array(n).fill(1); // dp[0][i] = 1 for all i
    let cur = new Array(n).fill(0);

    for (let j = 1; j <= k; j++) {
        let prefix = 0; // S[j-1][i-1], starts empty
        for (let i = 0; i < n; i++) {
            cur[i] = ((i === 0 ? 0 : cur[i - 1]) + prefix) % MOD;
            prefix = (prefix + prev[i]) % MOD;
        }
        [prev, cur] = [cur, prev]; // swap, avoid reallocation
    }

    return prev[n - 1];
};