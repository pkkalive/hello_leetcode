/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const n = nums.length;
    const sum = new Array(4 * n).fill(0);
    const sq = new Array(4 * n).fill(0);
    const lz = new Array(4 * n).fill(0);

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
            apply(2 * node, mid - l + 1, lz[node]);
            apply(2 * node + 1, r - mid, lz[node]);
            lz[node] = 0;
        }
        if (ql <= mid) update(2 * node, l, mid, ql, qr);
        if (qr > mid) update(2 * node + 1, mid + 1, r, ql, qr);
        sum[node] = sum[2 * node] + sum[2 * node + 1];
        sq[node] = sq[2 * node] + sq[2 * node + 1];
    };

    const last = new Map();
    let total = 0;
    for (let j = 0; j < n; j++) {
        const p = last.has(nums[j]) ? last.get(nums[j]) : -1;
        update(1, 0, n - 1, p + 1, j);
        last.set(nums[j], j);
        total += sq[1];
    }
    return total;
};