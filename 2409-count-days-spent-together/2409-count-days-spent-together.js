/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const prefix = [0];
    for (let i = 0; i < 12; i++) prefix.push(prefix[i] + days[i]);

    const toDay = (s) => prefix[parseInt(s.slice(0, 2), 10) - 1] + parseInt(s.slice(3), 10);

    const start = Math.max(toDay(arriveAlice), toDay(arriveBob));
    const end = Math.min(toDay(leaveAlice), toDay(leaveBob));
    return Math.max(0, end - start + 1);
};