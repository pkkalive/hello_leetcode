/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const n = nums1.length;
    let k = k1 + k2;
    let maxD = 0;
    let total = 0;
    const d = new Array(n);
    for (let i = 0; i < n; i++) {
        d[i] = Math.abs(nums1[i] - nums2[i]);
        total += d[i];
        if (d[i] > maxD) maxD = d[i];
    }
    if (total <= k) return 0;

    const cnt = new Array(maxD + 1).fill(0);
    for (let i = 0; i < n; i++) cnt[d[i]]++;

    for (let v = maxD; v > 0 && k > 0; v--) {
        const c = cnt[v];
        if (c === 0) continue;
        if (c <= k) {
            k -= c;
            cnt[v - 1] += c;
            cnt[v] = 0;
        } else {
            cnt[v - 1] += k;
            cnt[v] -= k;
            k = 0;
        }
    }

    let res = 0n;
    for (let v = 1; v <= maxD; v++) {
        if (cnt[v] > 0) res += BigInt(v) * BigInt(v) * BigInt(cnt[v]);
    }
    return Number(res);
};