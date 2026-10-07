/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let left = 0, right = 0;
    for (const c of s) {
        if (c === '(') left++;
        else if (c === ')') {
            if (left > 0) left--;
            else right++;
        }
    }

    const res = new Set();
    const n = s.length;

    const dfs = (i, l, r, open, path) => {
        if (n - i < l + r) return;
        if (i === n) {
            if (l === 0 && r === 0 && open === 0) res.add(path);
            return;
        }
        const c = s[i];
        if (c === '(') {
            if (l > 0) dfs(i + 1, l - 1, r, open, path);
            dfs(i + 1, l, r, open + 1, path + c);
        } else if (c === ')') {
            if (r > 0) dfs(i + 1, l, r - 1, open, path);
            if (open > 0) dfs(i + 1, l, r, open - 1, path + c);
        } else {
            dfs(i + 1, l, r, open, path + c);
        }
    };

    dfs(0, left, right, 0, '');
    return [...res];
};