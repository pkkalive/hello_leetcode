/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;
    const sum = new Float64Array(4 * n);
    const sq = new Float64Array(4 * n);
    const lz = new Float64Array(4 * n);

    const apply = (node, len, v) => {
        sq[node] += 2 * v * sum[node] + len * v * v;
        sum[node] += v * len;
        lz[node] += v;
    };

    const update = (node, l, r, ql, qr) => {
        if (ql <= l && r <= qr) {
            apply(node, r - l + 1, 1);
            return;
        }
        const mid = (l + r) >> 1;
        if (lz[node]) {
            apply(node * 2, mid - l + 1, lz[node]);
            apply(node * 2 + 1, r - mid, lz[node]);
            lz[node] = 0;
        }
        if (ql <= mid) update(node * 2, l, mid, ql, qr);
        if (qr > mid) update(node * 2 + 1, mid + 1, r, ql, qr);
        sum[node] = sum[node * 2] + sum[node * 2 + 1];
        sq[node] = sq[node * 2] + sq[node * 2 + 1];
    };

    const last = new Int32Array(100001).fill(-1);
    let ans = 0;
    for (let j = 0; j < n; j++) {
        update(1, 0, n - 1, last[nums[j]] + 1, j);
        last[nums[j]] = j;
        ans = (ans + sq[1] % MOD) % MOD;
    }
    return ans;
};