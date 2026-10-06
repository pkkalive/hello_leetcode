/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0;
    let add = 0;
    for (const c of s) {
        if (c === '(') {
            open++;
        } else if (open > 0) {
            open--;
        } else {
            add++;
        }
    }
    return open + add;
};