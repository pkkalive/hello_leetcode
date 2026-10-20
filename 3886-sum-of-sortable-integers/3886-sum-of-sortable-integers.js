/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    const n = nums.length;
    let total = 0;

    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) continue;

        let prevMax = 0;
        let ok = true;

        for (let s = 0; s < n && ok; s += k) {
            let descents = 0;
            let pos = -1;

            for (let i = 0; i < k; i++) {
                const cur = nums[s + i];
                const nxt = nums[s + (i + 1) % k];
                if (cur > nxt) {
                    descents++;
                    pos = i;
                    if (descents > 1) break;
                }
            }

            if (descents > 1) {
                ok = false;
                break;
            }

            let mn, mx;
            if (descents === 0) {
                mn = mx = nums[s];
            } else {
                mn = nums[s + (pos + 1) % k];
                mx = nums[s + pos];
            }

            if (mn < prevMax) {
                ok = false;
                break;
            }
            prevMax = mx;
        }

        if (ok) total += k;
    }

    return total;
};