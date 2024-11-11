/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    let date = "";
    let del = 0;

    if (seconds < 10) {
        return "just now";
    } else if (seconds < 60) {
        date = "seconds";
        del = 10;
    } else if (seconds < 3600) {
        seconds = seconds > 1800 ? 1800 : seconds;
        date = "minutes";
        del = 60;
    } else if (seconds < 86400) {
        seconds = seconds > 43200 ? 43200 : seconds;
        date = "hours";
        del = 3600;
    } else if (seconds < 604800) {
        if (seconds > 172799) return "a few days ago";
        date = "days";
        del = 86400;
    } else if (seconds < 2419200) {
        date = "weeks";
        del = 604800;
    } else {
        return "undefined";
    }

    let all = Math.floor(seconds / del);

    return `${date === "seconds" ? (all *= 10) : all} ${
        all !== 1 ? date : date.slice(0, -1)
    } ago`;

module.exports = timeago;
