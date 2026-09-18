/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n = s.length;
    const first = new Array(26).fill(-1);
    const last = new Array(26).fill(-1);

    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;
        if (first[c] === -1) first[c] = i;
        last[c] = i;
    }

    const intervals = [];
    for (let c = 0; c < 26; c++) {
        if (first[c] === -1) continue;

        let start = first[c];
        let end = last[c];
        let valid = true;

        for (let j = start; j <= end; j++) {
            const cc = s.charCodeAt(j) - 97;
            if (first[cc] < start) {
                valid = false;
                break;
            }
            if (last[cc] > end) end = last[cc];
        }

        if (valid) intervals.push([start, end]);
    }

    intervals.sort((a, b) => a[1] - b[1]);

    const result = [];
    let prevEnd = -1;
    for (const [start, end] of intervals) {
        if (start > prevEnd) {
            result.push(s.substring(start, end + 1));
            prevEnd = end;
        }
    }

    return result;
};