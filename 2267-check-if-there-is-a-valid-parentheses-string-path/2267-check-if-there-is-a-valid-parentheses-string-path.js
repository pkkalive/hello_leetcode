/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length, n = grid[0].length;
    if ((m + n - 1) % 2 === 1) return false;
    if (grid[0][0] === ')' || grid[m - 1][n - 1] === '(') return false;

    const half = BigInt((m + n - 1) >> 1);
    const mask = (1n << (half + 1n)) - 1n;

    let prevRow = new Array(n).fill(0n);
    for (let i = 0; i < m; i++) {
        const cur = new Array(n).fill(0n);
        for (let j = 0; j < n; j++) {
            let prev;
            if (i === 0 && j === 0) prev = 1n;
            else prev = (i > 0 ? prevRow[j] : 0n) | (j > 0 ? cur[j - 1] : 0n);
            cur[j] = grid[i][j] === '(' ? (prev << 1n) & mask : prev >> 1n;
        }
        prevRow = cur;
    }
    return (prevRow[n - 1] & 1n) === 1n;
};