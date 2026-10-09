/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let ins = 0;
    let open = 0;
    let i = 0;
    const n = s.length;

    while (i < n) {
        if (s[i] === '(') {
            open++;
            i++;
        } else {
            if (i + 1 < n && s[i + 1] === ')') {
                i += 2;
            } else {
                ins++;
                i++;
            }
            if (open > 0) {
                open--;
            } else {
                ins++;
            }
        }
    }

    return ins + open * 2;
};