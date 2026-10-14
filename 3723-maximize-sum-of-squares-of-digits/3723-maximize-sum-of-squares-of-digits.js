/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if (sum > 9 * num) return "";
    const nines = Math.floor(sum / 9);
    const rem = sum % 9;
    let res = "9".repeat(nines);
    if (rem > 0) res += rem;
    return res + "0".repeat(num - res.length);
};