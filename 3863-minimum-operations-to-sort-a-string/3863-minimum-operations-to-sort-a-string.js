/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const n = s.length;
    let sorted = true;
    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) { sorted = false; break; }
    }
    if (sorted) return 0;
    if (n === 2) return -1;

    let min = 'z', max = 'a';
    for (let i = 0; i < n; i++) {
        if (s[i] < min) min = s[i];
        if (s[i] > max) max = s[i];
    }
    if (s[0] === min || s[n - 1] === max) return 1;

    if (s[0] === max && s[n - 1] === min) {
        let maxCount = 0, minCount = 0;
        for (let i = 0; i < n; i++) {
            if (s[i] === max) maxCount++;
            if (s[i] === min) minCount++;
        }
        if (maxCount === 1 && minCount === 1) return 3;
    }
    return 2;
};