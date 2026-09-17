/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length;
    const minLen = new Array(n).fill(Infinity); // minLen[i] = shortest valid subarray ending at or before i
    let left = 0, sum = 0;
    let best = Infinity;
    let result = Infinity;

    for (let right = 0; right < n; right++) {
        sum += arr[right];
        while (sum > target) {
            sum -= arr[left];
            left++;
        }
        if (sum === target) {
            const currLen = right - left + 1;
            if (left > 0 && minLen[left - 1] !== Infinity) {
                result = Math.min(result, minLen[left - 1] + currLen);
            }
            best = Math.min(best, currLen);
        }
        minLen[right] = best;
    }

    return result === Infinity ? -1 : result;
};