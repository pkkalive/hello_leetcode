/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const n = img1.length;

    // Collect coordinates of 1s as separate x/y arrays (avoids array-of-arrays overhead)
    const x1 = [], y1 = [], x2 = [], y2 = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (img1[i][j] === 1) { x1.push(i); y1.push(j); }
            if (img2[i][j] === 1) { x2.push(i); y2.push(j); }
        }
    }

    const A = x1.length, B = x2.length;
    if (A === 0 || B === 0) return 0;

    // Theoretical best possible overlap — lets us exit early
    const maxPossible = Math.min(A, B);

    const size = 2 * n - 1;               // number of distinct shift values per axis
    const counts = new Int32Array(size * size); // flat 2D count array, offset by (n-1)

    let best = 0;

    for (let a = 0; a < A; a++) {
        const px = x1[a], py = y1[a];
        for (let b = 0; b < B; b++) {
            const dx = px - x2[b] + n - 1; // shift in x, offset to be non-negative
            const dy = py - y2[b] + n - 1; // shift in y, offset to be non-negative
            const idx = dx * size + dy;
            const c = ++counts[idx];
            if (c > best) {
                best = c;
                if (best === maxPossible) return best; // can't do better than this
            }
        }
    }

    return best;
};