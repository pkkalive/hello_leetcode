/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
    const n = nums.length;
    const K = k, K2 = k * k;
    const total = new Int32Array(2 * n);
    const cnt = new Int32Array(2 * n * K2);
    const r0 = 1 % K;

    function setLeaf(node, val) {
        const t = val % K;
        total[node] = t;
        const off = node * K2;
        for (let i = 0; i < K2; i++) cnt[off + i] = 0;
        for (let r = 0; r < K; r++) cnt[off + r * K + (r * t) % K] = 1;
    }

    function pull(node) {
        const l = 2 * node, r = 2 * node + 1;
        const lt = total[l], rt = total[r];
        total[node] = (lt * rt) % K;
        const lo = l * K2, ro = r * K2, oo = node * K2;
        for (let rr = 0; rr < K; rr++) {
            const base = rr * K;
            const r2 = ((rr * lt) % K) * K;
            for (let x = 0; x < K; x++) {
                cnt[oo + base + x] = cnt[lo + base + x] + cnt[ro + r2 + x];
            }
        }
    }

    // build
    for (let i = 0; i < n; i++) setLeaf(n + i, nums[i]);
    for (let i = n - 1; i >= 1; i--) pull(i);

    function update(idx, val) {
        setLeaf(n + idx, val);
        let node = (n + idx) >> 1;
        while (node >= 1) { pull(node); node >>= 1; }
    }

    const leftNodes = new Int32Array(64);
    const rightNodes = new Int32Array(64);

    // query product-count for range [ql, qr] (0-indexed inclusive), for target x, starting residue r0
    function query(ql, qr, x) {
        let l = ql + n, r = qr + n + 1;
        let li = 0, ri = 0;
        while (l < r) {
            if (l & 1) leftNodes[li++] = l++;
            if (r & 1) { r--; rightNodes[ri++] = r; }
            l >>= 1; r >>= 1;
        }
        let res = 0;
        let cur = r0;
        for (let i = 0; i < li; i++) {
            const node = leftNodes[i];
            res += cnt[node * K2 + cur * K + x];
            cur = (cur * total[node]) % K;
        }
        for (let i = ri - 1; i >= 0; i--) {
            const node = rightNodes[i];
            res += cnt[node * K2 + cur * K + x];
            cur = (cur * total[node]) % K;
        }
        return res;
    }

    const result = new Array(queries.length);
    for (let qi = 0; qi < queries.length; qi++) {
        const [index, value, start, x] = queries[qi];
        update(index, value);
        result[qi] = query(start, n - 1, x);
    }
    return result;
};