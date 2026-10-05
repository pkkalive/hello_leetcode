/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0];
    for (const c of s) {
        if (c === '(') {
            stack.push(0);
        } else {
            const inner = stack.pop();
            stack[stack.length - 1] += inner === 0 ? 1 : 2 * inner;
        }
    }
    return stack[0];
};
