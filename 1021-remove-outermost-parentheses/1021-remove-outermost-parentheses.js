/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depth = 0;
    const out = [];
    for (const c of s) {
        if (c === '(') {
            if (depth > 0) out.push(c);
            depth++;
        } else {
            depth--;
            if (depth > 0) out.push(c);
        }
    }
    return out.join('');
};