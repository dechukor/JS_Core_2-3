/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    let numAllStation = 13;
    let numStationForvard = Math.abs(x - y) - 1;
    let numStationBack = (numAllStation - 2) - numStationForvard;
    
    if (numStationForvard < numStationBack) {
        return numStationForvard;
    } else {
        return numStationBack;
    }
    
  }

module.exports = metro;
