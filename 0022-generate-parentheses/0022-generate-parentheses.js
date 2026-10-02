/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const buf = new Array(2 * n);

    const backtrack = (pos, open, close) => {
        if (pos === 2 * n) {
            result.push(buf.join(''));
            return;
        }
        if (open < n) {
            buf[pos] = '(';
            backtrack(pos + 1, open + 1, close);
        }
        if (close < open) {
            buf[pos] = ')';
            backtrack(pos + 1, open, close + 1);
        }
    };

    backtrack(0, 0, 0);
    return result;
};