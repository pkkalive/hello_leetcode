/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const map = new Map(knowledge);
    let result = '';
    let i = 0;
    
    while (i < s.length) {
        if (s[i] === '(') {
            let j = i + 1;
            while (s[j] !== ')') j++;
            const key = s.substring(i + 1, j);
            result += map.has(key) ? map.get(key) : '?';
            i = j + 1;
        } else {
            result += s[i];
            i++;
        }
    }
    
    return result;
};