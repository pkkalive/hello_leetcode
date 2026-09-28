/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let max = 0;
    for (const c of s) {
        if (c === '(') {
            depth++;
            if (depth > max) max = depth;
        } else if (c === ')') {
            depth--;
        }
    }
    return max;
};