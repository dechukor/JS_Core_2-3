/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {

    const arrLetters = value.split('');
    let result = '';

    let i = 0;
    while (i < arrLetters.length) {        
        let qtyLetters = 1;
        
        let j = i + 1;        
        while (arrLetters[j] === arrLetters[i]) {
            qtyLetters++;
            j++;
        }

        if (qtyLetters === 1) {
            result += arrLetters[i];
            i++;
        } else {
            result += qtyLetters + arrLetters[i];
            i += qtyLetters;
        }
    }

    return result;
}


module.exports = rle;
